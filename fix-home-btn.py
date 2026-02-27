#!/usr/bin/env python3
"""홈 버튼 크기 수정 스크립트"""

# 파일 읽기
with open('memory-game/style-mobile.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 수정할 라인 찾기 및 수정
i = 0
while i < len(lines):
    line = lines[i]
    
    # .home-btn 스타일 찾기
    if '.home-btn {' in line:
        # 다음 줄들 확인
        if i + 1 < len(lines) and 'font-size: 1.2em !important;' in lines[i + 1]:
            # 미디어 쿼리 내의 홈 버튼 (1.2em -> 2em)
            lines[i + 1] = lines[i + 1].replace('1.2em', '2em')
            if i + 2 < len(lines) and 'padding: 2px 6px !important;' in lines[i + 2]:
                lines[i + 2] = lines[i + 2].replace('2px 6px', '6px 12px')
                # min-width 추가
                indent = '        '  # 미디어 쿼리 내부 들여쓰기
                lines.insert(i + 3, f'{indent}min-width: 50px;\n')
                i += 1  # 추가된 라인 때문에 인덱스 조정
    
    i += 1

# 파일 쓰기
with open('memory-game/style-mobile.css', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('✅ 홈 버튼 크기가 수정되었습니다!')
print('   - 기본: 2.5em, 8px 16px')
print('   - 모바일: 2em, 6px 12px')
