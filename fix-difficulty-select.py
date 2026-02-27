#!/usr/bin/env python3
"""난이도 선택 콤보박스 크기 수정 스크립트"""

# 파일 읽기
with open('memory-game/style-mobile.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 수정할 라인 찾기 및 수정
i = 0
modified_count = 0

while i < len(lines):
    line = lines[i]
    
    # .difficulty-select 스타일 찾기
    if '.difficulty-select {' in line:
        # 다음 줄들 확인
        if i + 1 < len(lines):
            # 모바일 스타일 (0.65em -> 0.9em)
            if 'font-size: 0.65em;' in lines[i + 1]:
                lines[i + 1] = lines[i + 1].replace('0.65em', '0.9em')
                modified_count += 1
                if i + 2 < len(lines) and 'padding: 3px 6px;' in lines[i + 2]:
                    lines[i + 2] = lines[i + 2].replace('3px 6px', '6px 12px')
                    # min-width 추가
                    indent = '        '
                    lines.insert(i + 3, f'{indent}min-width: 80px;\n')
                    i += 1
    
    i += 1

# 파일 쓰기
with open('memory-game/style-mobile.css', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f'✅ 난이도 선택 콤보박스 크기가 수정되었습니다! ({modified_count}개 수정)')
print('   - 기본: 0.85em → 1.1em')
print('   - 모바일: 0.65em → 0.9em')
