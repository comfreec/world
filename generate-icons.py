#!/usr/bin/env python3
"""
아이콘 생성 스크립트
실행: python generate-icons.py
"""

from PIL import Image, ImageDraw, ImageFont
import math

def draw_icon(size):
    # 이미지 생성
    img = Image.new('RGB', (size, size), color='white')
    draw = ImageDraw.Draw(img)
    
    # 배경 그라디언트 (단순화 - 단색으로)
    for y in range(size):
        r = int(102 + (118 - 102) * y / size)
        g = int(126 + (75 - 126) * y / size)
        b = int(234 + (162 - 234) * y / size)
        draw.line([(0, y), (size, y)], fill=(r, g, b))
    
    # 지구본 그리기
    center_x = size // 2
    center_y = size // 2
    radius = int(size * 0.35)
    
    # 지구본 외곽선 (초록색)
    draw.ellipse(
        [center_x - radius, center_y - radius, center_x + radius, center_y + radius],
        fill=(76, 175, 80)
    )
    
    # 바다 (파란색)
    inner_radius = int(radius * 0.95)
    draw.ellipse(
        [center_x - inner_radius, center_y - inner_radius, 
         center_x + inner_radius, center_y + inner_radius],
        fill=(33, 150, 243)
    )
    
    # 대륙 (간단한 형태 - 초록색 원들)
    continent_color = (76, 175, 80)
    
    # 대륙 1
    draw.ellipse(
        [center_x - int(radius * 0.7), center_y - int(radius * 0.55),
         center_x - int(radius * 0.1), center_y - int(radius * 0.05)],
        fill=continent_color
    )
    
    # 대륙 2
    draw.ellipse(
        [center_x, center_y - int(radius * 0.4),
         center_x + int(radius * 0.7), center_y + int(radius * 0.4)],
        fill=continent_color
    )
    
    # 대륙 3
    draw.ellipse(
        [center_x - int(radius * 0.35), center_y + int(radius * 0.2),
         center_x + int(radius * 0.15), center_y + int(radius * 0.6)],
        fill=continent_color
    )
    
    # 경도선 (흰색 반투명)
    for i in range(-2, 3):
        angle = i * math.pi / 6
        width = int(radius * 0.95 * abs(math.cos(angle)))
        if width > 5:
            draw.ellipse(
                [center_x - width, center_y - int(radius * 0.95),
                 center_x + width, center_y + int(radius * 0.95)],
                outline=(255, 255, 255, 100), width=max(1, size // 100)
            )
    
    # 위도선
    for i in [-1, 0, 1]:
        y_offset = int(i * radius * 0.5)
        y = center_y + y_offset
        width = int(math.sqrt(radius * radius - y_offset * y_offset) * 0.95)
        if width > 5:
            draw.ellipse(
                [center_x - width, y - int(radius * 0.15),
                 center_x + width, y + int(radius * 0.15)],
                outline=(255, 255, 255, 100), width=max(1, size // 100)
            )
    
    # 국기 (작은 깃발들)
    flag_size = int(size * 0.08)
    flag_positions = [
        (center_x - int(radius * 0.6), center_y - int(radius * 0.5)),
        (center_x + int(radius * 0.5), center_y - int(radius * 0.4)),
        (center_x + int(radius * 0.3), center_y + int(radius * 0.5))
    ]
    
    for pos_x, pos_y in flag_positions:
        # 깃대
        draw.line(
            [(pos_x, pos_y), (pos_x, pos_y + int(flag_size * 1.5))],
            fill='white', width=max(1, size // 125)
        )
        
        # 깃발
        draw.polygon(
            [(pos_x, pos_y),
             (pos_x + flag_size, pos_y + int(flag_size * 0.3)),
             (pos_x, pos_y + int(flag_size * 0.6))],
            fill=(255, 82, 82)
        )
    
    # 텍스트 (512 사이즈에서만)
    if size >= 512:
        try:
            # 한글 폰트 시도 (시스템에 따라 다를 수 있음)
            font_large = ImageFont.truetype("malgun.ttf", int(size * 0.08))
            font_small = ImageFont.truetype("malgun.ttf", int(size * 0.06))
        except:
            try:
                font_large = ImageFont.truetype("arial.ttf", int(size * 0.08))
                font_small = ImageFont.truetype("arial.ttf", int(size * 0.06))
            except:
                font_large = ImageFont.load_default()
                font_small = ImageFont.load_default()
        
        # 텍스트 그리기
        text1 = "국기"
        text2 = "마스터"
        
        # 텍스트 중앙 정렬을 위한 bbox 계산
        bbox1 = draw.textbbox((0, 0), text1, font=font_large)
        bbox2 = draw.textbbox((0, 0), text2, font=font_small)
        
        text1_width = bbox1[2] - bbox1[0]
        text2_width = bbox2[2] - bbox2[0]
        
        draw.text(
            (center_x - text1_width // 2, int(size * 0.85)),
            text1, fill='white', font=font_large
        )
        draw.text(
            (center_x - text2_width // 2, int(size * 0.92)),
            text2, fill='white', font=font_small
        )
    
    return img

# 아이콘 생성
print("🎨 아이콘 생성 중...")

# 192x192
img_192 = draw_icon(192)
img_192.save('icon-192.png', 'PNG')
print("✅ icon-192.png 생성 완료")

# 512x512
img_512 = draw_icon(512)
img_512.save('icon-512.png', 'PNG')
print("✅ icon-512.png 생성 완료")

print("\n🎉 모든 아이콘이 생성되었습니다!")
print("\n다음 단계:")
print("1. icon-192.png와 icon-512.png 파일을 확인하세요")
print("2. 이 파일들을 프로젝트 루트 디렉토리에 두세요")
print("3. git add icon-192.png icon-512.png")
print("4. git commit -m 'Add app icons'")
print("5. git push")
