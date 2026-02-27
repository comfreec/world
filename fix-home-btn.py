#!/usr/bin/env python3
"""메모리 게임 버튼 크기 수정 스크립트"""

# 파일 읽기
with open('memory-game/style-mobile.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 수정할 라인 찾기 및 수정
i = 0
modified_count = 0

while i < len(lines):
    line = lines[i]
    
    # .btn-small 스타일 찾기
    if '.btn-small {' in line:
        # 다음 줄들 확인
        if i + 1 < len(lines):
            # 기본 스타일 (0.9em -> 1.2em)
            if 'font-size: 0.9em;' in lines[i + 1]:
                lines[i + 1] = lines[i + 1].replace('0.9em', '1.2em')
                modified_count += 1
                if i + 2 < len(lines) and 'padding: 8px 16px;' in lines[i + 2]:
                    lines[i + 2] = lines[i + 2].replace('8px 16px', '10px 20px')
            
            # 모바일 스타일 (0.7em -> 1em)
            elif 'font-size: 0.7em;' in lines[i + 1]:
                lines[i + 1] = lines[i + 1].replace('0.7em', '1em')
                modified_count += 1
                if i + 2 < len(lines) and 'padding: 3px 6px;' in lines[i + 2]:
                    lines[i + 2] = lines[i + 2].replace('3px 6px', '6px 12px')
            
            # 매우 작은 화면 (0.5em -> 0.8em)
            elif 'font-size: 0.5em;' in lines[i + 1]:
                lines[i + 1] = lines[i + 1].replace('0.5em', '0.8em')
                modified_count += 1
                if i + 2 < len(lines) and 'padding: 2px 4px;' in lines[i + 2]:
                    lines[i + 2] = lines[i + 2].replace('2px 4px', '4px 8px')
    
    # 태블릿 전용 스타일 (2em -> 2.5em)
    elif 'font-size: 2em !important;' in line and '.btn-small' in lines[i - 2] if i >= 2 else False:
        lines[i] = line.replace('2em', '2.5em')
        modified_count += 1
    
    i += 1

# 파일 쓰기
with open('memory-game/style-mobile.css', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f'✅ 버튼 크기가 수정되었습니다! ({modified_count}개 수정)')
print('   - 기본: 0.9em → 1.2em')
print('   - 모바일: 0.7em → 1em')
print('   - 태블릿: 2em → 2.5em')
print('   - 작은 화면: 0.5em → 0.8em')
