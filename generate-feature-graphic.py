#!/usr/bin/env python3
"""
Play Store 기능 그래픽 생성 (1024 x 500)
실행: python generate-feature-graphic.py
"""

from PIL import Image, ImageDraw, ImageFont

def create_feature_graphic():
    # 이미지 생성 (1024 x 500)
    width, height = 1024, 500
    img = Image.new('RGB', (width, height), color='white')
    draw = ImageDraw.Draw(img)
    
    # 배경 그라디언트
    for y in range(height):
        r = int(102 + (118 - 102) * y / height)
        g = int(126 + (75 - 126) * y / height)
        b = int(234 + (162 - 234) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # 왼쪽에 지구본 아이콘
    icon_size = 300
    icon_x = 100
    icon_y = (height - icon_size) // 2
    
    # 지구본 그리기
    center_x = icon_x + icon_size // 2
    center_y = icon_y + icon_size // 2
    radius = icon_size // 3
    
    # 지구본 외곽선
    draw.ellipse(
        [center_x - radius, center_y - radius, center_x + radius, center_y + radius],
        fill=(76, 175, 80)
    )
    
    # 바다
    inner_radius = int(radius * 0.95)
    draw.ellipse(
        [center_x - inner_radius, center_y - inner_radius, 
         center_x + inner_radius, center_y + inner_radius],
        fill=(33, 150, 243)
    )
    
    # 대륙들
    continent_color = (76, 175, 80)
    
    draw.ellipse(
        [center_x - int(radius * 0.7), center_y - int(radius * 0.55),
         center_x - int(radius * 0.1), center_y - int(radius * 0.05)],
        fill=continent_color
    )
    
    draw.ellipse(
        [center_x, center_y - int(radius * 0.4),
         center_x + int(radius * 0.7), center_y + int(radius * 0.4)],
        fill=continent_color
    )
    
    draw.ellipse(
        [center_x - int(radius * 0.35), center_y + int(radius * 0.2),
         center_x + int(radius * 0.15), center_y + int(radius * 0.6)],
        fill=continent_color
    )
    
    # 국기들
    flag_size = 30
    flag_positions = [
        (center_x - int(radius * 0.6), center_y - int(radius * 0.5)),
        (center_x + int(radius * 0.5), center_y - int(radius * 0.4)),
        (center_x + int(radius * 0.3), center_y + int(radius * 0.5))
    ]
    
    for pos_x, pos_y in flag_positions:
        # 깃대
        draw.line(
            [(pos_x, pos_y), (pos_x, pos_y + int(flag_size * 1.5))],
            fill='white', width=3
        )
        # 깃발
        draw.polygon(
            [(pos_x, pos_y),
             (pos_x + flag_size, pos_y + int(flag_size * 0.3)),
             (pos_x, pos_y + int(flag_size * 0.6))],
            fill=(255, 82, 82)
        )
    
    # 오른쪽에 텍스트
    text_x = 450
    
    try:
        # 한글 폰트 시도
        font_title = ImageFont.truetype("malgun.ttf", 80)
        font_subtitle = ImageFont.truetype("malgun.ttf", 40)
        font_features = ImageFont.truetype("malgun.ttf", 28)
    except:
        try:
            font_title = ImageFont.truetype("arial.ttf", 80)
            font_subtitle = ImageFont.truetype("arial.ttf", 40)
            font_features = ImageFont.truetype("arial.ttf", 28)
        except:
            font_title = ImageFont.load_default()
            font_subtitle = ImageFont.load_default()
            font_features = ImageFont.load_default()
    
    # 제목
    draw.text((text_x, 80), "세계 국기", fill='white', font=font_title)
    draw.text((text_x, 170), "마스터", fill='white', font=font_title)
    
    # 부제목
    draw.text((text_x, 270), "재미있게 배우는 195개 국가", fill=(255, 255, 255), font=font_subtitle)
    
    # 특징들
    features_y = 340
    features = ["🎯 퀴즈", "🧠 메모리", "📚 학습", "🏆 성취"]
    for i, feature in enumerate(features):
        x_offset = i * 130
        draw.text((text_x + x_offset, features_y), feature, fill='white', font=font_features)
    
    return img

# 기능 그래픽 생성
print("🎨 Play Store 기능 그래픽 생성 중...")
img = create_feature_graphic()
img.save('feature-graphic.png', 'PNG')
print("✅ feature-graphic.png 생성 완료 (1024 x 500)")

print("\n📱 이 이미지를 Play Console에 업로드하세요:")
print("   - 위치: 스토어 등록정보 > 그래픽")
print("   - 크기: 1024 x 500")
print("   - 형식: PNG 또는 JPG")
