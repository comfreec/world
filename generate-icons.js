// Node.js로 아이콘 생성하기
// 실행: node generate-icons.js

const fs = require('fs');
const { createCanvas } = require('canvas');

function drawIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // 배경 그라디언트
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // 지구본 그리기
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;
    
    // 지구본 외곽선 (초록색)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#4CAF50';
    ctx.fill();
    
    // 바다 (파란색 원)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2);
    ctx.fillStyle = '#2196F3';
    ctx.fill();
    
    // 대륙 (간단한 형태)
    ctx.fillStyle = '#4CAF50';
    
    // 대륙 1 (왼쪽 상단)
    ctx.beginPath();
    ctx.ellipse(centerX - radius * 0.4, centerY - radius * 0.3, radius * 0.3, radius * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 대륙 2 (오른쪽)
    ctx.beginPath();
    ctx.ellipse(centerX + radius * 0.3, centerY, radius * 0.35, radius * 0.4, Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();
    
    // 대륙 3 (하단)
    ctx.beginPath();
    ctx.ellipse(centerX - radius * 0.1, centerY + radius * 0.4, radius * 0.25, radius * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 경도선
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = size * 0.01;
    
    for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * 0.95 * Math.abs(Math.cos(i * Math.PI / 6)), radius * 0.95, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // 위도선
    for (let i = -1; i <= 1; i++) {
        const y = centerY + i * radius * 0.5;
        const width = Math.sqrt(radius * radius - (i * radius * 0.5) * (i * radius * 0.5)) * 0.95;
        ctx.beginPath();
        ctx.ellipse(centerX, y, width, radius * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // 국기 아이콘 (작은 깃발들)
    const flagSize = size * 0.08;
    const flagPositions = [
        {x: centerX - radius * 0.6, y: centerY - radius * 0.5},
        {x: centerX + radius * 0.5, y: centerY - radius * 0.4},
        {x: centerX + radius * 0.3, y: centerY + radius * 0.5}
    ];
    
    flagPositions.forEach(pos => {
        // 깃대
        ctx.strokeStyle = 'white';
        ctx.lineWidth = size * 0.008;
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x, pos.y + flagSize * 1.5);
        ctx.stroke();
        
        // 깃발
        ctx.fillStyle = '#FF5252';
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x + flagSize, pos.y + flagSize * 0.3);
        ctx.lineTo(pos.x, pos.y + flagSize * 0.6);
        ctx.fill();
    });
    
    // 텍스트 (512 사이즈에서만)
    if (size >= 512) {
        ctx.fillStyle = 'white';
        ctx.font = `bold ${size * 0.08}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('국기', centerX, size * 0.88);
        ctx.font = `bold ${size * 0.06}px Arial`;
        ctx.fillText('마스터', centerX, size * 0.95);
    }
    
    return canvas;
}

// 192x192 아이콘 생성
const canvas192 = drawIcon(192);
const buffer192 = canvas192.toBuffer('image/png');
fs.writeFileSync('icon-192.png', buffer192);
console.log('✅ icon-192.png 생성 완료');

// 512x512 아이콘 생성
const canvas512 = drawIcon(512);
const buffer512 = canvas512.toBuffer('image/png');
fs.writeFileSync('icon-512.png', buffer512);
console.log('✅ icon-512.png 생성 완료');

console.log('\n🎉 모든 아이콘이 생성되었습니다!');
