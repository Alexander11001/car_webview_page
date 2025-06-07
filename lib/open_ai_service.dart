import 'dart:convert';
import 'dart:typed_data';
import 'package:http/http.dart' as http;

import 'car_info.dart';

class OpenAIService {
  static String? _apiKey;
  static const String apiUrl = 'https://api.openai.com/v1/chat/completions';

  // Метод для установки API ключа из мобильного приложения
  static void setApiKey(String key) {
    _apiKey = key;
  }

  // Получение API ключа
  static String? get apiKey => _apiKey;

  static Future<CarInfo?> identifyCarBrand(Uint8List imageBytes) async {
    if (_apiKey == null) {
      print('API key not set. Waiting for mobile app to provide it.');
      return null;
    }

    try {
      String base64Image = base64Encode(imageBytes);

      final response = await http.post(
        Uri.parse(apiUrl),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_apiKey',
        },
        body: jsonEncode({
          'model': 'gpt-4o-mini',
          'messages': [
            {
              'role': 'user',
              'content': [
                {
                  'type': 'text',
                  'text': '''Identify the car brand and model in this image. 
                  Respond ONLY with JSON format without any additional text:
                  {
                    "brand": "brand name",
                    "model": "model name",
                    "confidence": "high/medium/low"
                  }
                  If you cannot identify the car, return:
                  {
                    "brand": "unknown",
                    "model": "unknown",
                    "confidence": "low"
                  }'''
                },
                {
                  'type': 'image_url',
                  'image_url': {
                    'url': 'data:image/jpeg;base64,$base64Image'
                  }
                }
              ]
            }
          ],
          'max_tokens': 150,
          'temperature': 0.2,
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final content = data['choices'][0]['message']['content'];
        final carData = jsonDecode(content);
        return CarInfo.fromJson(carData);
      }
      return null;
    } catch (e) {
      print('Error identifying car: $e');
      return null;
    }
  }
}