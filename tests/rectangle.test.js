import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should return correct rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(20, 20);
    expect(perimeter).toBe(80);  
});

test('should return correct rectangle area', () => {
    const area = getRectangleArea(20, 20);
    expect(area).toBe(400); 
});

test('should return correct rectangle info', () => {
    const info = getRectangleInfo(80,400)
    expect(info).toBe(console.log());  
})
