// lib/models/car_info.dart
class CarInfo {
  final String brand;
  final String model;
  final String confidence;

  CarInfo({
    required this.brand,
    required this.model,
    required this.confidence,
  });

  factory CarInfo.fromJson(Map<String, dynamic> json) {
    return CarInfo(
      brand: json['brand'] ?? 'unknown',
      model: json['model'] ?? 'unknown',
      confidence: json['confidence'] ?? 'low',
    );
  }
}