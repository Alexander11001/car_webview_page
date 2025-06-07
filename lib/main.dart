import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:html' as html;
import 'dart:js' as js;

import 'car_info.dart';
import 'open_ai_service.dart';

Future<void> main() async {
  // Регистрируем функцию для получения API ключа от мобильного приложения
  js.context['setOpenAIKey'] = (String apiKey) {
    OpenAIService.setApiKey(apiKey);
    print('API key received from mobile app');
  };

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Car Scanner',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'SF Pro Display',
      ),
      home: CarScannerHome(),
    );
  }
}

class CarScannerHome extends StatefulWidget {
  @override
  _CarScannerHomeState createState() => _CarScannerHomeState();
}

class _CarScannerHomeState extends State<CarScannerHome> {
  Uint8List? _imageBytes;
  CarInfo? _carInfo;
  bool _isLoading = false;
  String _statusMessage = '';
  bool _isApiKeyReceived = false;

  @override
  void initState() {
    super.initState();
    // Проверяем наличие API ключа каждую секунду
    _checkApiKey();
  }

  void _checkApiKey() {
    Future.delayed(Duration(seconds: 1), () {
      if (OpenAIService.apiKey != null && !_isApiKeyReceived) {
        setState(() {
          _isApiKeyReceived = true;
          _statusMessage = 'Ready to scan cars!';
        });
      } else if (!_isApiKeyReceived) {
        _checkApiKey(); // Продолжаем проверку
      }
    });
  }

  Future<void> _pickImage() async {
    if (!_isApiKeyReceived) {
      setState(() {
        _statusMessage = 'Waiting for connection to mobile app...';
      });
      return;
    }

    final imageBytes = await ImagePickerWeb.getImageAsBytes();
    if (imageBytes != null) {
      setState(() {
        _imageBytes = imageBytes;
        _carInfo = null;
        _statusMessage = '';
      });
      _analyzeImage();
    }
  }

  Future<void> _analyzeImage() async {
    if (_imageBytes == null) return;

    setState(() {
      _isLoading = true;
      _statusMessage = 'Analyzing car image...';
    });

    try {
      final carInfo = await OpenAIService.identifyCarBrand(_imageBytes!);

      setState(() {
        _carInfo = carInfo;
        _isLoading = false;
        if (carInfo != null && carInfo.brand != 'unknown') {
          _statusMessage = 'Car identified successfully!';
        } else {
          _statusMessage = 'Could not identify the car';
        }
      });
    } catch (e) {
      setState(() {
        _isLoading = false;
        _statusMessage = 'Error: ${e.toString()}';
      });
    }
  }

  Future<void> _openOtomotoSearch() async {
    if (_carInfo == null) return;

    final brand = _carInfo!.brand.toLowerCase().replaceAll(' ', '-');
    final model = _carInfo!.model.toLowerCase().replaceAll(' ', '-');
    final url = 'https://www.otomoto.pl/osobowe/$brand/$model';

    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFF5F5F7),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Header
                Container(
                  padding: EdgeInsets.symmetric(vertical: 20),
                  child: Column(
                    children: [
                      Icon(
                        Icons.directions_car,
                        size: 48,
                        color: Colors.blue,
                      ),
                      SizedBox(height: 10),
                      Text(
                        'Car Scanner',
                        style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF1D1D1F),
                        ),
                      ),
                      SizedBox(height: 5),
                      Text(
                        'Identify car and find on Otomoto.pl',
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey[600],
                        ),
                      ),
                      if (!_isApiKeyReceived)
                        Container(
                          margin: EdgeInsets.only(top: 10),
                          padding: EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: Colors.orange.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: Text(
                            'Waiting for mobile app connection...',
                            style: TextStyle(
                              color: Colors.orange[700],
                              fontSize: 14,
                            ),
                          ),
                        ),
                    ],
                  ),
                ),

                // Upload Button
                Container(
                  height: 56,
                  child: ElevatedButton(
                    onPressed: (_isLoading || !_isApiKeyReceived) ? null : _pickImage,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue,
                      foregroundColor: Colors.white,
                      elevation: 0,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.camera_alt),
                        SizedBox(width: 8),
                        Text(
                          'Upload Car Photo!',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                SizedBox(height: 20),

                // Image Preview
                if (_imageBytes != null)
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 10,
                          offset: Offset(0, 4),
                        ),
                      ],
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Image.memory(
                        _imageBytes!,
                        height: 300,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),

                // Loading or Status
                if (_isLoading || _statusMessage.isNotEmpty)
                  Container(
                    margin: EdgeInsets.only(top: 20),
                    padding: EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.05),
                          blurRadius: 10,
                          offset: Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Row(
                      children: [
                        if (_isLoading)
                          SizedBox(
                            width: 24,
                            height: 24,
                            child: CircularProgressIndicator(
                              strokeWidth: 3,
                              valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
                            ),
                          ),
                        if (_isLoading) SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            _statusMessage,
                            style: TextStyle(
                              fontSize: 16,
                              color: Color(0xFF1D1D1F),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),

                // Results
                if (_carInfo != null && _carInfo!.brand != 'unknown')
                  Container(
                    margin: EdgeInsets.only(top: 20),
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.05),
                          blurRadius: 10,
                          offset: Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Identified Car',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF1D1D1F),
                          ),
                        ),
                        SizedBox(height: 16),
                        Row(
                          children: [
                            Expanded(
                              child: _InfoCard(
                                label: 'Brand',
                                value: _carInfo!.brand,
                                icon: Icons.label,
                              ),
                            ),
                            SizedBox(width: 12),
                            Expanded(
                              child: _InfoCard(
                                label: 'Model',
                                value: _carInfo!.model,
                                icon: Icons.car_repair,
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 12),
                        _InfoCard(
                          label: 'Confidence',
                          value: _carInfo!.confidence.toUpperCase(),
                          icon: Icons.analytics,
                          color: _getConfidenceColor(_carInfo!.confidence),
                        ),
                        SizedBox(height: 20),
                        SizedBox(
                          width: double.infinity,
                          height: 48,
                          child: ElevatedButton(
                            onPressed: _openOtomotoSearch,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Color(0xFF00B746),
                              foregroundColor: Colors.white,
                              elevation: 0,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(Icons.search),
                                SizedBox(width: 8),
                                Text(
                                  'Search on Otomoto.pl',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Color _getConfidenceColor(String confidence) {
    switch (confidence.toLowerCase()) {
      case 'high':
        return Colors.green;
      case 'medium':
        return Colors.orange;
      default:
        return Colors.red;
    }
  }
}


class _InfoCard extends StatelessWidget {
  final String label;
  final String value;
  final IconData icon;
  final Color? color;

  const _InfoCard({
    required this.label,
    required this.value,
    required this.icon,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Color(0xFFF5F5F7),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          Icon(
            icon,
            size: 24,
            color: color ?? Colors.blue,
          ),
          SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey[600],
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  value,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF1D1D1F),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}