// 전 세계 국가 데이터 (quiz.js와 동일)
// 앱 설정 로드
const appSettings = JSON.parse(localStorage.getItem('appSettings') || '{"voiceEnabled":true,"soundEnabled":true,"voiceSpeed":1.3}');

const countries = [
    { name: '아프가니스탄', code: 'AF' }, { name: '알바니아', code: 'AL' }, { name: '알제리', code: 'DZ' },
    { name: '안도라', code: 'AD' }, { name: '앙골라', code: 'AO' }, { name: '앤티가 바부다', code: 'AG' },
    { name: '아르헨티나', code: 'AR' }, { name: '아르메니아', code: 'AM' }, { name: '호주', code: 'AU' },
    { name: '오스트리아', code: 'AT' }, { name: '아제르바이잔', code: 'AZ' }, { name: '바하마', code: 'BS' },
    { name: '바레인', code: 'BH' }, { name: '방글라데시', code: 'BD' }, { name: '바베이도스', code: 'BB' },
    { name: '벨라루스', code: 'BY' }, { name: '벨기에', code: 'BE' }, { name: '벨리즈', code: 'BZ' },
    { name: '베냉', code: 'BJ' }, { name: '부탄', code: 'BT' }, { name: '볼리비아', code: 'BO' },
    { name: '보스니아 헤르체고비나', code: 'BA' }, { name: '보츠와나', code: 'BW' }, { name: '브라질', code: 'BR' },
    { name: '브루나이', code: 'BN' }, { name: '불가리아', code: 'BG' }, { name: '부르키나파소', code: 'BF' },
    { name: '부룬디', code: 'BI' }, { name: '캄보디아', code: 'KH' }, { name: '카메룬', code: 'CM' },
    { name: '캐나다', code: 'CA' }, { name: '카보베르데', code: 'CV' }, { name: '중앙아프리카공화국', code: 'CF' },
    { name: '차드', code: 'TD' }, { name: '칠레', code: 'CL' }, { name: '중국', code: 'CN' },
    { name: '콜롬비아', code: 'CO' }, { name: '코모로', code: 'KM' }, { name: '콩고', code: 'CG' },
    { name: '콩고민주공화국', code: 'CD' }, { name: '코스타리카', code: 'CR' }, { name: '크로아티아', code: 'HR' },
    { name: '쿠바', code: 'CU' }, { name: '키프로스', code: 'CY' }, { name: '체코', code: 'CZ' },
    { name: '덴마크', code: 'DK' }, { name: '지부티', code: 'DJ' }, { name: '도미니카', code: 'DM' },
    { name: '도미니카공화국', code: 'DO' }, { name: '에콰도르', code: 'EC' }, { name: '이집트', code: 'EG' },
    { name: '엘살바도르', code: 'SV' }, { name: '적도기니', code: 'GQ' }, { name: '에리트레아', code: 'ER' },
    { name: '에스토니아', code: 'EE' }, { name: '에스와티니', code: 'SZ' }, { name: '에티오피아', code: 'ET' },
    { name: '피지', code: 'FJ' }, { name: '핀란드', code: 'FI' }, { name: '프랑스', code: 'FR' },
    { name: '가봉', code: 'GA' }, { name: '감비아', code: 'GM' }, { name: '조지아', code: 'GE' },
    { name: '독일', code: 'DE' }, { name: '가나', code: 'GH' }, { name: '그리스', code: 'GR' },
    { name: '그레나다', code: 'GD' }, { name: '과테말라', code: 'GT' }, { name: '기니', code: 'GN' },
    { name: '기니비사우', code: 'GW' }, { name: '가이아나', code: 'GY' }, { name: '아이티', code: 'HT' },
    { name: '온두라스', code: 'HN' }, { name: '헝가리', code: 'HU' }, { name: '아이슬란드', code: 'IS' },
    { name: '인도', code: 'IN' }, { name: '인도네시아', code: 'ID' }, { name: '이란', code: 'IR' },
    { name: '이라크', code: 'IQ' }, { name: '아일랜드', code: 'IE' }, { name: '이스라엘', code: 'IL' },
    { name: '이탈리아', code: 'IT' }, { name: '코트디부아르', code: 'CI' }, { name: '자메이카', code: 'JM' },
    { name: '일본', code: 'JP' }, { name: '요르단', code: 'JO' }, { name: '카자흐스탄', code: 'KZ' },
    { name: '케냐', code: 'KE' }, { name: '키리바시', code: 'KI' }, { name: '북한', code: 'KP' },
    { name: '대한민국', code: 'KR' }, { name: '쿠웨이트', code: 'KW' }, { name: '키르기스스탄', code: 'KG' },
    { name: '라오스', code: 'LA' }, { name: '라트비아', code: 'LV' }, { name: '레바논', code: 'LB' },
    { name: '레소토', code: 'LS' }, { name: '라이베리아', code: 'LR' }, { name: '리비아', code: 'LY' },
    { name: '리히텐슈타인', code: 'LI' }, { name: '리투아니아', code: 'LT' }, { name: '룩셈부르크', code: 'LU' },
    { name: '마다가스카르', code: 'MG' }, { name: '말라위', code: 'MW' }, { name: '말레이시아', code: 'MY' },
    { name: '몰디브', code: 'MV' }, { name: '말리', code: 'ML' }, { name: '몰타', code: 'MT' },
    { name: '마셜제도', code: 'MH' }, { name: '모리타니', code: 'MR' }, { name: '모리셔스', code: 'MU' },
    { name: '멕시코', code: 'MX' }, { name: '미크로네시아', code: 'FM' }, { name: '몰도바', code: 'MD' },
    { name: '모나코', code: 'MC' }, { name: '몽골', code: 'MN' }, { name: '몬테네그로', code: 'ME' },
    { name: '모로코', code: 'MA' }, { name: '모잠비크', code: 'MZ' }, { name: '미얀마', code: 'MM' },
    { name: '나미비아', code: 'NA' }, { name: '나우루', code: 'NR' }, { name: '네팔', code: 'NP' },
    { name: '네덜란드', code: 'NL' }, { name: '뉴질랜드', code: 'NZ' }, { name: '니카라과', code: 'NI' },
    { name: '니제르', code: 'NE' }, { name: '나이지리아', code: 'NG' }, { name: '북마케도니아', code: 'MK' },
    { name: '노르웨이', code: 'NO' }, { name: '오만', code: 'OM' }, { name: '파키스탄', code: 'PK' },
    { name: '팔라우', code: 'PW' }, { name: '팔레스타인', code: 'PS' }, { name: '파나마', code: 'PA' },
    { name: '파푸아뉴기니', code: 'PG' }, { name: '파라과이', code: 'PY' }, { name: '페루', code: 'PE' },
    { name: '필리핀', code: 'PH' }, { name: '폴란드', code: 'PL' }, { name: '포르투갈', code: 'PT' },
    { name: '카타르', code: 'QA' }, { name: '루마니아', code: 'RO' }, { name: '러시아', code: 'RU' },
    { name: '르완다', code: 'RW' }, { name: '세인트키츠 네비스', code: 'KN' }, { name: '세인트루시아', code: 'LC' },
    { name: '세인트빈센트 그레나딘', code: 'VC' }, { name: '사모아', code: 'WS' }, { name: '산마리노', code: 'SM' },
    { name: '상투메 프린시페', code: 'ST' }, { name: '사우디아라비아', code: 'SA' }, { name: '세네갈', code: 'SN' },
    { name: '세르비아', code: 'RS' }, { name: '세이셸', code: 'SC' }, { name: '시에라리온', code: 'SL' },
    { name: '싱가포르', code: 'SG' }, { name: '슬로바키아', code: 'SK' }, { name: '슬로베니아', code: 'SI' },
    { name: '솔로몬제도', code: 'SB' }, { name: '소말리아', code: 'SO' }, { name: '남아프리카공화국', code: 'ZA' },
    { name: '남수단', code: 'SS' }, { name: '스페인', code: 'ES' }, { name: '스리랑카', code: 'LK' },
    { name: '수단', code: 'SD' }, { name: '수리남', code: 'SR' }, { name: '스웨덴', code: 'SE' },
    { name: '스위스', code: 'CH' }, { name: '시리아', code: 'SY' }, { name: '타지키스탄', code: 'TJ' },
    { name: '탄자니아', code: 'TZ' }, { name: '태국', code: 'TH' }, { name: '동티모르', code: 'TL' },
    { name: '토고', code: 'TG' }, { name: '통가', code: 'TO' }, { name: '트리니다드 토바고', code: 'TT' },
    { name: '튀니지', code: 'TN' }, { name: '터키', code: 'TR' }, { name: '투르크메니스탄', code: 'TM' },
    { name: '투발루', code: 'TV' }, { name: '우간다', code: 'UG' }, { name: '우크라이나', code: 'UA' },
    { name: '아랍에미리트', code: 'AE' }, { name: '영국', code: 'GB' }, { name: '미국', code: 'US' },
    { name: '우루과이', code: 'UY' }, { name: '우즈베키스탄', code: 'UZ' }, { name: '바누아투', code: 'VU' },
    { name: '바티칸', code: 'VA' }, { name: '베네수엘라', code: 'VE' }, { name: '베트남', code: 'VN' },
    { name: '예멘', code: 'YE' }, { name: '잠비아', code: 'ZM' }, { name: '짐바브웨', code: 'ZW' }
];

// 국가 상세 정보 (수도 및 특징)
const countryInfo = {
    'KR': { capital: '서울', feature: '한반도 남쪽에 위치한 나라로, K팝, 드라마, 영화 등 한류 문화가 전 세계적으로 인기를 끌고 있습니다. IT 산업과 자동차 산업이 발달했으며, 김치, 불고기, 비빔밥 등 다양한 음식 문화가 있습니다' },
    'JP': { capital: '도쿄', feature: '아시아의 섬나라로, 첨단 기술과 전통 문화가 공존하는 나라입니다. 애니메이션, 만화, 게임 산업이 발달했으며, 벚꽃, 후지산, 온천, 스시 등으로 유명합니다. 세계 3위의 경제 대국입니다' },
    'CN': { capital: '베이징', feature: '세계에서 인구가 가장 많은 나라로, 14억 명이 넘는 사람들이 살고 있습니다. 만리장성, 자금성, 병마용 등 유명한 유적지가 많으며, 5천 년의 긴 역사를 가진 나라입니다. 세계 2위의 경제 대국입니다' },
    'US': { capital: '워싱턴', feature: '북아메리카의 강대국으로, 자유의 여신상, 그랜드 캐니언, 할리우드 등이 유명합니다. 세계 최대 경제 대국이며, 다양한 인종과 문화가 공존하는 나라입니다. 햄버거, 핫도그 등 패스트푸드의 본고장입니다' },
    'GB': { capital: '런던', feature: '유럽의 섬나라로, 빅벤, 버킹엄 궁전, 대영박물관 등이 유명합니다. 영어의 본고장이며, 해리포터, 셜록 홈즈 등 유명한 문학 작품이 많습니다. 왕실 전통이 살아있는 나라입니다' },
    'FR': { capital: '파리', feature: '유럽의 나라로, 에펠탑, 루브르 박물관, 개선문 등이 있는 예술과 패션의 도시입니다. 와인, 치즈, 바게트 등 음식 문화가 발달했으며, 세계적인 관광지입니다. 프랑스 혁명의 발상지입니다' },
    'DE': { capital: '베를린', feature: '유럽 중부의 나라로, 자동차 산업이 매우 발달했습니다. 벤츠, BMW, 폴크스바겐 등 유명한 자동차 회사가 있으며, 맥주와 소시지가 유명합니다. 베를린 장벽이 있었던 역사적인 나라입니다' },
    'IT': { capital: '로마', feature: '유럽 남부의 나라로, 피자와 파스타의 본고장입니다. 로마 제국의 유적지인 콜로세움, 피사의 사탑, 베네치아의 운하 등이 유명합니다. 르네상스 예술의 중심지이며, 패션과 디자인이 발달했습니다' },
    'ES': { capital: '마드리드', feature: '유럽 남서부의 나라로, 축구가 매우 인기 있으며 플라멩코 춤이 유명합니다. 가우디의 사그라다 파밀리아, 투우, 파에야 등이 유명하며, 정열적인 문화를 가진 나라입니다' },
    'CA': { capital: '오타와', feature: '북아메리카의 넓은 나라로, 단풍잎이 국기의 상징입니다. 나이아가라 폭포, 로키 산맥 등 아름다운 자연경관이 많으며, 메이플 시럽이 유명합니다. 영어와 프랑스어를 공용어로 사용합니다' },
    'AU': { capital: '캔버라', feature: '오세아니아의 대륙 국가로, 캥거루, 코알라, 오리너구리 등 독특한 동물들이 삽니다. 시드니 오페라 하우스, 그레이트 배리어 리프, 울루루 바위 등이 유명하며, 서핑과 해변 문화가 발달했습니다' },
    'BR': { capital: '브라질리아', feature: '남아메리카 최대 국가로, 축구의 나라이며 삼바 춤과 카니발이 유명합니다. 아마존 열대우림이 있으며, 커피 생산이 많습니다. 리우데자네이루의 예수상이 유명한 관광지입니다' },
    'IN': { capital: '뉴델리', feature: '남아시아의 큰 나라로, 14억 명이 넘는 인구를 가진 세계 최대 민주주의 국가입니다. 타지마할, 갠지스 강, 요가, 카레 등이 유명하며, IT 산업이 발달했습니다. 다양한 종교와 문화가 공존합니다' },
    'RU': { capital: '모스크바', feature: '세계에서 가장 넓은 나라로, 11개의 시간대를 가지고 있습니다. 붉은 광장, 크렘린 궁전, 에르미타주 박물관 등이 유명하며, 발레와 클래식 음악이 발달했습니다. 추운 겨울과 보드카가 유명합니다' },
    'MX': { capital: '멕시코시티', feature: '북아메리카 남부의 나라로, 타코, 부리토, 나초 등 멕시코 음식이 유명합니다. 마야 문명과 아즈텍 문명의 유적지가 있으며, 테킬라와 마리아치 음악이 유명합니다. 해골 축제인 망자의 날이 있습니다' },
    'TH': { capital: '방콕', feature: '동남아시아의 나라로, 황금 사원과 불교 문화가 발달했습니다. 팟타이, 똠얌꿍 등 맛있는 음식이 많으며, 코끼리와 수상 시장이 유명합니다. 미소의 나라로 불리며 관광 산업이 발달했습니다' },
    'VN': { capital: '하노이', feature: '동남아시아의 나라로, 쌀국수인 포가 유명합니다. 하롱베이의 아름다운 바다 풍경, 프랑스 식민지 시대의 건축물, 아오자이 전통 의상 등이 유명합니다. 커피 생산이 많은 나라입니다' },
    'SG': { capital: '싱가포르', feature: '동남아시아의 도시 국가로, 매우 깨끗하고 현대적인 나라입니다. 마리나 베이 샌즈, 머라이언, 가든스 바이 더 베이 등이 유명하며, 다양한 민족이 조화롭게 살고 있습니다. 금융과 무역의 중심지입니다' },
    'EG': { capital: '카이로', feature: '아프리카 북동부의 나라로, 고대 이집트 문명의 피라미드와 스핑크스가 있습니다. 나일 강이 흐르며, 투탕카멘의 황금 마스크, 룩소르 신전 등 유명한 유적지가 많습니다. 7천 년의 역사를 가진 나라입니다' },
    'ZA': { capital: '프리토리아', feature: '아프리카 남부의 나라로, 사자, 코끼리, 기린 등 다양한 야생동물이 삽니다. 사파리 관광이 유명하며, 다이아몬드와 금이 많이 생산됩니다. 넬슨 만델라의 나라이며, 무지개 나라로 불립니다' },
    'AR': { capital: '부에노스아이레스', feature: '남아메리카의 나라로, 탱고와 축구가 유명합니다' },
    'NL': { capital: '암스테르담', feature: '유럽의 나라로, 튤립과 풍차가 유명합니다' },
    'CH': { capital: '베른', feature: '유럽 중부의 나라로, 알프스 산맥과 시계가 유명합니다' },
    'SE': { capital: '스톡홀름', feature: '북유럽의 나라로, 복지 제도가 잘 되어 있습니다' },
    'NO': { capital: '오슬로', feature: '북유럽의 나라로, 피오르드가 아름답습니다' },
    'PL': { capital: '바르샤바', feature: '동유럽의 나라로, 쇼팽의 고향입니다' },
    'TR': { capital: '앙카라', feature: '유럽과 아시아에 걸친 나라로, 케밥이 유명합니다' },
    'SA': { capital: '리야드', feature: '중동의 나라로, 석유가 많이 생산됩니다' },
    'AE': { capital: '아부다비', feature: '중동의 나라로, 두바이의 높은 빌딩이 유명합니다' },
    'NZ': { capital: '웰링턴', feature: '오세아니아의 섬나라로, 양이 많고 자연이 아름답습니다' },
    'ID': { capital: '자카르타', feature: '동남아시아 최대 국가로, 수많은 섬으로 이루어져 있습니다' },
    'MY': { capital: '쿠알라룸푸르', feature: '동남아시아의 나라로, 페트로나스 트윈 타워가 유명합니다' },
    'PH': { capital: '마닐라', feature: '동남아시아의 섬나라로, 7천 개가 넘는 섬으로 이루어져 있습니다' },
    'PK': { capital: '이슬라마바드', feature: '남아시아의 나라로, 이슬람 문화가 발달했습니다' },
    'BD': { capital: '다카', feature: '남아시아의 나라로, 인구 밀도가 매우 높습니다' },
    'NG': { capital: '아부자', feature: '아프리카 최대 인구 국가로, 석유가 풍부합니다' },
    'ET': { capital: '아디스아바바', feature: '아프리카의 고원 국가로, 커피의 원산지입니다' },
    'KE': { capital: '나이로비', feature: '동아프리카의 나라로, 사파리 관광이 유명합니다' },
    'CO': { capital: '보고타', feature: '남아메리카의 나라로, 커피 생산이 유명합니다' },
    'CL': { capital: '산티아고', feature: '남아메리카의 긴 나라로, 안데스 산맥이 있습니다' },
    'PE': { capital: '리마', feature: '남아메리카의 나라로, 마추픽추가 있습니다' },
    'VE': { capital: '카라카스', feature: '남아메리카의 나라로, 석유가 풍부합니다' },
    'GR': { capital: '아테네', feature: '유럽 남부의 나라로, 고대 문명의 발상지입니다' },
    'PT': { capital: '리스본', feature: '유럽 서부의 나라로, 대항해시대의 중심지였습니다' },
    'BE': { capital: '브뤼셀', feature: '유럽의 작은 나라로, 초콜릿과 와플이 유명합니다' },
    'AT': { capital: '빈', feature: '유럽 중부의 나라로, 음악의 도시로 유명합니다' },
    'CZ': { capital: '프라하', feature: '유럽 중부의 나라로, 아름다운 중세 도시가 있습니다' },
    'HU': { capital: '부다페스트', feature: '유럽 중부의 나라로, 온천이 유명합니다' },
    'RO': { capital: '부쿠레슈티', feature: '동유럽의 나라로, 드라큘라 전설이 있습니다' },
    'UA': { capital: '키이우', feature: '동유럽의 큰 나라로, 곡창지대가 넓습니다' },
    'DK': { capital: '코펜하겐', feature: '북유럽의 나라로, 레고와 인어공주 동상이 유명합니다' },
    'FI': { capital: '헬싱키', feature: '북유럽의 나라로, 사우나와 오로라가 유명합니다' },
    'IE': { capital: '더블린', feature: '유럽의 섬나라로, 초록색 들판이 아름답습니다' },
    'IL': { capital: '예루살렘', feature: '중동의 나라로, 세 종교의 성지입니다' },
    'IQ': { capital: '바그다드', feature: '중동의 나라로, 고대 메소포타미아 문명이 있었습니다' },
    'IR': { capital: '테헤란', feature: '중동의 나라로, 페르시아 문명의 후예입니다' },
    'KZ': { capital: '아스타나', feature: '중앙아시아 최대 국가로, 초원이 넓습니다' },
    'UZ': { capital: '타슈켄트', feature: '중앙아시아의 나라로, 실크로드의 중심지였습니다' },
    'MM': { capital: '네피도', feature: '동남아시아의 나라로, 불교 사원이 많습니다' },
    'KH': { capital: '프놈펜', feature: '동남아시아의 나라로, 앙코르와트가 있습니다' },
    'LA': { capital: '비엔티안', feature: '동남아시아의 내륙 국가로, 메콩강이 흐릅니다' },
    'NP': { capital: '카트만두', feature: '남아시아의 산악 국가로, 에베레스트가 있습니다' },
    'LK': { capital: '콜롬보', feature: '남아시아의 섬나라로, 홍차가 유명합니다' },
    'MA': { capital: '라바트', feature: '북아프리카의 나라로, 사하라 사막이 있습니다' },
    'DZ': { capital: '알제', feature: '북아프리카 최대 국가로, 사하라 사막이 넓습니다' },
    'TN': { capital: '튀니스', feature: '북아프리카의 나라로, 카르타고 유적이 있습니다' },
    'GH': { capital: '아크라', feature: '서아프리카의 나라로, 카카오 생산이 많습니다' },
    'CI': { capital: '야무수크로', feature: '서아프리카의 나라로, 카카오와 커피가 유명합니다' },
    'SN': { capital: '다카르', feature: '서아프리카의 나라로, 다카르 랠리로 유명합니다' },
    'TZ': { capital: '도도마', feature: '동아프리카의 나라로, 킬리만자로 산이 있습니다' },
    'UG': { capital: '캄팔라', feature: '동아프리카의 나라로, 빅토리아 호수가 있습니다' },
    'ZM': { capital: '루사카', feature: '남아프리카의 내륙 국가로, 빅토리아 폭포가 있습니다' },
    'ZW': { capital: '하라레', feature: '남아프리카의 나라로, 빅토리아 폭포가 있습니다' },
    'CU': { capital: '아바나', feature: '카리브해의 섬나라로, 시가와 럼주가 유명합니다' },
    'CR': { capital: '산호세', feature: '중앙아메리카의 나라로, 생태 관광이 발달했습니다' },
    'PA': { capital: '파나마시티', feature: '중앙아메리카의 나라로, 파나마 운하가 있습니다' },
    'EC': { capital: '키토', feature: '남아메리카의 나라로, 갈라파고스 제도가 있습니다' },
    'BO': { capital: '라파스', feature: '남아메리카의 내륙 국가로, 세계에서 가장 높은 수도가 있습니다' },
    'PY': { capital: '아순시온', feature: '남아메리카의 내륙 국가로, 과라니 문화가 있습니다' },
    'AF': { capital: '카불', feature: '중앙아시아의 산악 국가입니다' },
    'AL': { capital: '티라나', feature: '발칸 반도의 작은 나라입니다' },
    'AD': { capital: '안도라라베야', feature: '피레네 산맥의 작은 공국입니다' },
    'AO': { capital: '루안다', feature: '아프리카 남서부의 나라로, 석유가 풍부합니다' },
    'AG': { capital: '세인트존스', feature: '카리브해의 작은 섬나라입니다' },
    'AM': { capital: '예레반', feature: '코카서스 지역의 고대 국가입니다' },
    'AZ': { capital: '바쿠', feature: '카스피해 연안의 나라로, 석유가 풍부합니다' },
    'BS': { capital: '나소', feature: '카리브해의 섬나라로, 관광지로 유명합니다' },
    'BH': { capital: '마나마', feature: '페르시아만의 작은 섬나라입니다' },
    'BB': { capital: '브리지타운', feature: '카리브해의 섬나라입니다' },
    'BY': { capital: '민스크', feature: '동유럽의 내륙 국가입니다' },
    'BZ': { capital: '벨모판', feature: '중앙아메리카의 작은 나라입니다' },
    'BJ': { capital: '포르토노보', feature: '서아프리카의 나라입니다' },
    'BT': { capital: '팀푸', feature: '히말라야의 작은 왕국으로, 행복지수가 높습니다' },
    'BA': { capital: '사라예보', feature: '발칸 반도의 나라입니다' },
    'BW': { capital: '가보로네', feature: '남아프리카의 나라로, 다이아몬드가 풍부합니다' },
    'BN': { capital: '반다르스리브가완', feature: '보르네오 섬의 작은 부유한 나라입니다' },
    'BG': { capital: '소피아', feature: '발칸 반도의 나라로, 장미가 유명합니다' },
    'BF': { capital: '와가두구', feature: '서아프리카의 내륙 국가입니다' },
    'BI': { capital: '기테가', feature: '동아프리카의 작은 나라입니다' },
    'KH': { capital: '프놈펜', feature: '동남아시아의 나라로, 앙코르와트가 있습니다' },
    'CM': { capital: '야운데', feature: '중앙아프리카의 나라입니다' },
    'CV': { capital: '프라이아', feature: '대서양의 섬나라입니다' },
    'CF': { capital: '방기', feature: '중앙아프리카의 내륙 국가입니다' },
    'TD': { capital: '은자메나', feature: '중앙아프리카의 큰 나라입니다' },
    'KM': { capital: '모로니', feature: '인도양의 작은 섬나라입니다' },
    'CG': { capital: '브라자빌', feature: '중앙아프리카의 나라입니다' },
    'CD': { capital: '킨샤사', feature: '중앙아프리카의 큰 나라입니다' },
    'HR': { capital: '자그레브', feature: '발칸 반도의 나라로, 아드리아해가 아름답습니다' },
    'CY': { capital: '니코시아', feature: '지중해의 섬나라입니다' },
    'DJ': { capital: '지부티', feature: '아프리카 동부의 작은 나라입니다' },
    'DM': { capital: '로조', feature: '카리브해의 작은 섬나라입니다' },
    'DO': { capital: '산토도밍고', feature: '카리브해의 섬나라입니다' },
    'SV': { capital: '산살바도르', feature: '중앙아메리카의 작은 나라입니다' },
    'GQ': { capital: '말라보', feature: '중앙아프리카의 작은 나라입니다' },
    'ER': { capital: '아스마라', feature: '아프리카 동부의 나라입니다' },
    'EE': { capital: '탈린', feature: '발트해 연안의 나라로, IT 산업이 발달했습니다' },
    'SZ': { capital: '음바바네', feature: '남아프리카의 작은 왕국입니다' },
    'FJ': { capital: '수바', feature: '태평양의 섬나라입니다' },
    'GA': { capital: '리브르빌', feature: '중앙아프리카의 나라입니다' },
    'GM': { capital: '반줄', feature: '서아프리카의 작은 나라입니다' },
    'GE': { capital: '트빌리시', feature: '코카서스 지역의 나라입니다' },
    'GD': { capital: '세인트조지스', feature: '카리브해의 작은 섬나라입니다' },
    'GT': { capital: '과테말라시티', feature: '중앙아메리카의 나라로, 마야 문명이 있었습니다' },
    'GN': { capital: '코나크리', feature: '서아프리카의 나라입니다' },
    'GW': { capital: '비사우', feature: '서아프리카의 작은 나라입니다' },
    'GY': { capital: '조지타운', feature: '남아메리카 북부의 나라입니다' },
    'HT': { capital: '포르토프랭스', feature: '카리브해의 섬나라입니다' },
    'HN': { capital: '테구시갈파', feature: '중앙아메리카의 나라입니다' },
    'IS': { capital: '레이캬비크', feature: '북대서양의 섬나라로, 화산과 온천이 많습니다' },
    'JM': { capital: '킹스턴', feature: '카리브해의 섬나라로, 레게 음악이 유명합니다' },
    'JO': { capital: '암만', feature: '중동의 나라로, 페트라 유적이 있습니다' },
    'KI': { capital: '타라와', feature: '태평양의 작은 섬나라입니다' },
    'KP': { capital: '평양', feature: '한반도 북쪽의 나라입니다' },
    'KW': { capital: '쿠웨이트시티', feature: '중동의 작은 나라로, 석유가 풍부합니다' },
    'KG': { capital: '비슈케크', feature: '중앙아시아의 산악 국가입니다' },
    'LV': { capital: '리가', feature: '발트해 연안의 나라입니다' },
    'LB': { capital: '베이루트', feature: '중동의 나라로, 지중해 연안에 있습니다' },
    'LS': { capital: '마세루', feature: '남아프리카의 작은 산악 왕국입니다' },
    'LR': { capital: '몬로비아', feature: '서아프리카의 나라입니다' },
    'LY': { capital: '트리폴리', feature: '북아프리카의 나라로, 사하라 사막이 있습니다' },
    'LI': { capital: '파두츠', feature: '알프스의 작은 공국입니다' },
    'LT': { capital: '빌뉴스', feature: '발트해 연안의 나라입니다' },
    'LU': { capital: '룩셈부르크', feature: '유럽의 작은 부유한 나라입니다' },
    'MG': { capital: '안타나나리보', feature: '인도양의 큰 섬나라로, 독특한 동물들이 삽니다' },
    'MW': { capital: '릴롱웨', feature: '동아프리카의 내륙 국가입니다' },
    'MV': { capital: '말레', feature: '인도양의 섬나라로, 휴양지로 유명합니다' },
    'ML': { capital: '바마코', feature: '서아프리카의 큰 나라입니다' },
    'MT': { capital: '발레타', feature: '지중해의 작은 섬나라입니다' },
    'MH': { capital: '마주로', feature: '태평양의 작은 섬나라입니다' },
    'MR': { capital: '누악쇼트', feature: '서아프리카의 나라로, 사하라 사막이 있습니다' },
    'MU': { capital: '포트루이스', feature: '인도양의 섬나라입니다' },
    'FM': { capital: '팔리키르', feature: '태평양의 작은 섬나라입니다' },
    'MD': { capital: '키시너우', feature: '동유럽의 작은 나라입니다' },
    'MC': { capital: '모나코', feature: '지중해 연안의 작은 부유한 공국입니다' },
    'MN': { capital: '울란바토르', feature: '중앙아시아의 큰 나라로, 초원이 넓습니다' },
    'ME': { capital: '포드고리차', feature: '발칸 반도의 작은 나라입니다' },
    'MZ': { capital: '마푸투', feature: '동아프리카의 나라입니다' },
    'NA': { capital: '빈트후크', feature: '남아프리카의 나라로, 나미브 사막이 있습니다' },
    'NR': { capital: '야렌', feature: '태평양의 작은 섬나라입니다' },
    'NI': { capital: '마나과', feature: '중앙아메리카의 나라입니다' },
    'NE': { capital: '니아메', feature: '서아프리카의 내륙 국가입니다' },
    'MK': { capital: '스코페', feature: '발칸 반도의 작은 나라입니다' },
    'OM': { capital: '무스카트', feature: '중동의 나라로, 아라비아해 연안에 있습니다' },
    'PW': { capital: '응게룰무드', feature: '태평양의 작은 섬나라입니다' },
    'PS': { capital: '라말라', feature: '중동 지역입니다' },
    'PG': { capital: '포트모르즈비', feature: '오세아니아의 섬나라입니다' },
    'QA': { capital: '도하', feature: '중동의 작은 나라로, 석유와 천연가스가 풍부합니다' },
    'RW': { capital: '키갈리', feature: '동아프리카의 작은 나라입니다' },
    'KN': { capital: '바스테르', feature: '카리브해의 작은 섬나라입니다' },
    'LC': { capital: '캐스트리스', feature: '카리브해의 작은 섬나라입니다' },
    'VC': { capital: '킹스타운', feature: '카리브해의 작은 섬나라입니다' },
    'WS': { capital: '아피아', feature: '태평양의 섬나라입니다' },
    'SM': { capital: '산마리노', feature: '이탈리아 안의 작은 공국입니다' },
    'ST': { capital: '상투메', feature: '아프리카 서부의 작은 섬나라입니다' },
    'RS': { capital: '베오그라드', feature: '발칸 반도의 나라입니다' },
    'SC': { capital: '빅토리아', feature: '인도양의 섬나라로, 휴양지로 유명합니다' },
    'SL': { capital: '프리타운', feature: '서아프리카의 나라입니다' },
    'SK': { capital: '브라티슬라바', feature: '중앙유럽의 나라입니다' },
    'SI': { capital: '류블랴나', feature: '발칸 반도의 작은 나라입니다' },
    'SB': { capital: '호니아라', feature: '태평양의 섬나라입니다' },
    'SO': { capital: '모가디슈', feature: '아프리카 동부의 나라입니다' },
    'SS': { capital: '주바', feature: '아프리카 동부의 새로운 나라입니다' },
    'SD': { capital: '하르툼', feature: '아프리카 동북부의 큰 나라입니다' },
    'SR': { capital: '파라마리보', feature: '남아메리카 북부의 작은 나라입니다' },
    'SY': { capital: '다마스쿠스', feature: '중동의 나라로, 고대 도시가 있습니다' },
    'TJ': { capital: '두샨베', feature: '중앙아시아의 산악 국가입니다' },
    'TL': { capital: '딜리', feature: '동남아시아의 작은 섬나라입니다' },
    'TG': { capital: '로메', feature: '서아프리카의 작은 나라입니다' },
    'TO': { capital: '누쿠알로파', feature: '태평양의 섬나라입니다' },
    'TT': { capital: '포트오브스페인', feature: '카리브해의 섬나라입니다' },
    'TM': { capital: '아슈하바트', feature: '중앙아시아의 나라입니다' },
    'TV': { capital: '푸나푸티', feature: '태평양의 작은 섬나라입니다' },
    'UY': { capital: '몬테비데오', feature: '남아메리카의 작은 나라입니다' },
    'VU': { capital: '포트빌라', feature: '태평양의 섬나라입니다' },
    'VA': { capital: '바티칸', feature: '세계에서 가장 작은 나라로, 교황이 있습니다' },
    'YE': { capital: '사나', feature: '중동의 나라로, 아라비아 반도 남쪽에 있습니다' }
};

let favorites = [];
let learnedCountries = [];
let currentFilter = 'all';
let currentCountry = null;

// 데이터 로드
function loadData() {
    const savedFavorites = localStorage.getItem('favoriteCountries');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
    
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    learnedCountries = stats.learnedCountries || [];
}

// 데이터 저장
function saveFavorites() {
    localStorage.setItem('favoriteCountries', JSON.stringify(favorites));
}

// 한글 초성 추출 함수
function getChosung(str) {
    const cho = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i) - 44032;
        if (code > -1 && code < 11172) {
            result += cho[Math.floor(code / 588)];
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

// 초성 검색 매칭 함수
function matchChosung(text, search) {
    // 일반 검색
    if (text.includes(search)) {
        return true;
    }
    
    // 초성 검색
    const textChosung = getChosung(text);
    return textChosung.includes(search);
}
// 국기 그리드 렌더링
function renderFlags(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('flagGrid');
    grid.innerHTML = '';
    
    let filteredCountries = countries;
    
    // 필터 적용
    if (filter === 'favorites') {
        filteredCountries = countries.filter(c => favorites.includes(c.code));
    } else if (filter === 'learned') {
        filteredCountries = countries.filter(c => learnedCountries.includes(c.code));
    }
    
    // 검색어 적용 (초성 검색 포함)
    if (searchTerm) {
        filteredCountries = filteredCountries.filter(c => 
            matchChosung(c.name, searchTerm)
        );
    }
    
    // 국기 카드 생성
    filteredCountries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'flag-card';
        
        if (favorites.includes(country.code)) {
            card.classList.add('favorite');
        }
        if (learnedCountries.includes(country.code)) {
            card.classList.add('learned');
        }
        
        card.innerHTML = `
            <img src="https://flagcdn.com/w160/${country.code.toLowerCase()}.png" alt="${country.name}">
            <div class="country-name">${country.name}</div>
        `;
        
        card.addEventListener('click', () => {
            // 클릭 시 바로 국가 정보와 함께 음성 재생
            speakCountryWithInfo(country);
            // 그 다음 상세 정보 표시
            showCountryDetail(country);
        });
        grid.appendChild(card);
    });
    
    updateStats();
}

// 국가 상세 정보 표시
function showCountryDetail(country) {
    currentCountry = country;
    const modal = document.getElementById('flagModal');
    const modalFlag = document.getElementById('modalFlag');
    const modalName = document.getElementById('modalCountryName');
    const modalCode = document.getElementById('modalCountryCode');
    const countryDetails = document.getElementById('countryDetails');
    const favoriteBtn = document.getElementById('favoriteBtn');
    
    modalFlag.src = `https://flagcdn.com/w640/${country.code.toLowerCase()}.png`;
    modalName.textContent = country.name;
    modalCode.textContent = country.code;
    
    // 국가 상세 정보 표시
    const info = countryInfo[country.code];
    if (info) {
        countryDetails.innerHTML = `
            <p><strong>🏛️ 수도:</strong> ${info.capital}</p>
            <p><strong>📝 특징:</strong> ${info.feature}</p>
        `;
        countryDetails.style.display = 'block';
    } else {
        countryDetails.style.display = 'none';
    }
    
    if (favorites.includes(country.code)) {
        favoriteBtn.classList.add('active');
        favoriteBtn.textContent = '⭐ 즐겨찾기 해제';
    } else {
        favoriteBtn.classList.remove('active');
        favoriteBtn.textContent = '⭐ 즐겨찾기';
    }
    
    modal.classList.add('show');
}

// 모달 닫기
function closeModal() {
    // 음성 중지
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    document.getElementById('flagModal').classList.remove('show');
}

// 즐겨찾기 토글
function toggleFavorite() {
    if (!currentCountry) return;
    
    const index = favorites.indexOf(currentCountry.code);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentCountry.code);
    }
    
    saveFavorites();
    renderFlags(currentFilter, document.getElementById('searchInput').value);
    showCountryDetail(currentCountry);
}

// 국가 이름 발음
function speakCountryName(countryName) {
    if (!appSettings.voiceEnabled) return;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(countryName);
        utterance.lang = 'ko-KR';
        utterance.rate = appSettings.voiceSpeed;
        utterance.pitch = 1;
        utterance.volume = 10;
        window.speechSynthesis.speak(utterance);
    }
}

// 국가 정보와 함께 발음 (클릭 시)
function speakCountryWithInfo(country) {
    if (!appSettings.voiceEnabled) return;
    
    if ('speechSynthesis' in window) {
        const info = countryInfo[country.code];
        let text = country.name;
        
        if (info) {
            text += `. 수도는 ${info.capital}입니다. ${info.feature}`;
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = appSettings.voiceSpeed;
        utterance.pitch = 1;
        utterance.volume = 10;
        
        // 음성 설명이 끝나면 모달 닫기
        utterance.onend = function() {
            closeModal();
        };
        
        window.speechSynthesis.speak(utterance);
    }
}

// 국가 이름 발음 (발음 버튼용)
function speakCountry() {
    if (!currentCountry) return;
    speakCountryWithInfo(currentCountry);
}

// 통계 업데이트
function updateStats() {
    const learnProgress = Math.round((learnedCountries.length / countries.length) * 100);
    document.getElementById('learnProgress').textContent = learnProgress + '%';
    document.getElementById('favoriteCount').textContent = favorites.length;
    
    // 필터 버튼 텍스트 업데이트
    document.querySelector('[data-filter="favorites"]').textContent = `즐겨찾기 ⭐ (${favorites.length})`;
    document.querySelector('[data-filter="learned"]').textContent = `학습 완료 ✓ (${learnedCountries.length})`;
}

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderFlags();
    
    // 검색
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // 검색 실행 함수
    const performSearch = () => {
        renderFlags(currentFilter, searchInput.value);
    };
    
    // 입력 시 실시간 검색
    searchInput.addEventListener('input', performSearch);
    
    // 검색 버튼 클릭
    searchBtn.addEventListener('click', performSearch);
    
    // 엔터키로 검색
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 필터 버튼
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderFlags(currentFilter, document.getElementById('searchInput').value);
        });
    });
    
    // 모달 배경 클릭 시 닫기
    document.getElementById('flagModal').addEventListener('click', (e) => {
        if (e.target.id === 'flagModal') {
            closeModal();
        }
    });
});

// 스크롤 버튼 초기화
window.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollBottomBtn = document.getElementById('scrollBottomBtn');
    
    // 스크롤 위치에 따라 버튼 표시/숨김
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
            scrollBottomBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
            scrollBottomBtn.classList.remove('show');
        }
    });
    
    // 맨 위로 스크롤
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 맨 아래로 스크롤
    scrollBottomBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
