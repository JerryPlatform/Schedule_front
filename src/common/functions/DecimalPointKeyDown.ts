function decimalPointKeyDown (event: { keyCode: number; shiftKey: boolean; preventDefault: () => void; }) {
  const canPushKey: Array<number> = [
    8,                                              // Backspace
    9,                                              // Tab
    35, 36,                                         // End, Home
    37, 39,                                         // Arrow left, Arrow right
    46,                                             // Delete
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57,         // [0-9]
    96, 97, 98, 99, 100, 101, 102, 103, 104, 105,   // [0-9] (Num Lock)
    190                                             // . (Dot)
  ];

  if(!(                                                       // 밑에 조건 false 일때 preventDefault();
    (!event.shiftKey && canPushKey.includes(event.keyCode))   // shiftKey false 일때 canPushKey 에 있는거만 ture 리턴
    || (event.shiftKey && event.keyCode === 9)                // shiftKey true 일때 '9 (Tab)' 만 true 리턴
  )){
    event.preventDefault();
  }
};

export default decimalPointKeyDown;