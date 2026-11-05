/* 天津市工程造价信息 2026年 1-10 期 材料价格（自动提取自官方期刊扫描件 OCR）
 * 口径：除税价（中间价÷1.13）；钢管由吨价按 GB/T3091 理论重量折算元/m；电线由 km 价折算元/m
 * 数据源：天津工程造价信息 2026年第1-10期「市场价格」栏目（水暖材料/电气材料/电缆）
 * official=官方中间价；est=中间价被装订裁切，按参考高/低价几何平均估算
 */
window.TJ_PERIODS_2026 = [
 {
  "period": "2026-10",
  "label": "2026年第10期（10月）",
  "castWater": {
   "100": 91.51,
   "150": 114.61,
   "200": 153.15,
   "250": 198.37,
   "300": 295.42,
   "400": 361.59,
   "500": 507.71
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {
   "100": 33.78,
   "125": 47.67,
   "15": 5.27,
   "150": 57.63,
   "20": 5.36,
   "25": 7.74,
   "32": 10.79,
   "40": 14.92,
   "50": 15.64,
   "65": 24.96,
   "80": 26.54
  },
  "ppr": {
   "110": 171.65,
   "25": 9.29,
   "32": 13.72,
   "40": 21.68,
   "50": 34.88,
   "63": 55.24,
   "75": 78.85,
   "90": 113.79
  },
  "pe": {
   "110": 102.3,
   "20": 4.33,
   "32": 9.11,
   "40": 14.12,
   "63": 33.83,
   "75": 46.2
  },
  "pvcDrain": {
   "100": 22.25,
   "150": 45.94,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x100": 52.65,
   "100x50": 41.15,
   "100x75": 47.35,
   "150x100": 66.81,
   "200x100": 80.09,
   "200x150": 110.18,
   "300x100": 138.5,
   "300x150": 156.19,
   "400x100": 164.16,
   "400x150": 203.98,
   "400x200": 234.07,
   "500x100": 244.69,
   "500x200": 257.96,
   "600x100": 279.2,
   "600x200": 302.12,
   "800x200": 343.49
  },
  "wire": {
   "BVR|1x0.75": 0.91,
   "BVR|1x1": 1.24,
   "BVR|1x1.5": 1.81,
   "BVR|1x16": 16.51,
   "BVR|1x2.5": 2.83,
   "BVR|1x25": 25.96,
   "BVR|1x35": 35.17,
   "BVR|1x4": 4.29,
   "BVR|1x50": 50.66,
   "BVV|3x1.5": 6.21,
   "BVV|3x2.5": 9.1,
   "BVV|3x4": 13.7,
   "BV|1x1": 1.23,
   "BV|1x150": 143.36,
   "BV|1x16": 15.86,
   "BV|1x185": 179.65,
   "BV|1x2.5": 2.46,
   "BV|1x25": 23.3,
   "BV|1x35": 31.83,
   "BV|1x4": 3.81,
   "BV|1x50": 47.43,
   "BV|1x6": 5.8,
   "RVS|1x2": 2.29,
   "RVS|2x0.3": 1.0,
   "RVS|2x0.4": 1.2,
   "RVS|2x0.5": 1.47,
   "RVS|2x0.7": 1.86
  },
  "valve": {
   "globe": {
    "50": 130.87
   },
   "gate": {
    "15": 20.88,
    "25": 37.5,
    "40": 75.66,
    "50": 104.58
   },
   "butterfly": {
    "100": 184.35,
    "125": 248.28,
    "150": 292.59,
    "200": 708.49,
    "250": 906.08,
    "300": 1188.55,
    "350": 1493.95,
    "400": 2726.38,
    "450": 3480.93,
    "50": 118.97,
    "65": 133.46,
    "80": 169.03
   },
   "balance": {
    "125": 1138.5,
    "15": 113.02,
    "25": 162.39,
    "32": 246.46,
    "65": 492.48,
    "80": 674.78
   },
   "strainer": {
    "100": 314.6,
    "15": 27.88,
    "150": 683.63,
    "20": 31.42,
    "200": 1332.04,
    "25": 40.27,
    "250": 1769.91,
    "300": 2654.87,
    "32": 74.78,
    "40": 103.98,
    "50": 125.22,
    "65": 165.04,
    "80": 228.76
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 35.84
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 54.96
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 359.73
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 487.89
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 438.5
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 57.08
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 81.82
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 551.77
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 736.23
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.83
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 15.16
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 723.45
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 949.58
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 83.1
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 119.29
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 114.6
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 151.25
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 18.14
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 22.66
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 155.31
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 34.16
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 207.52
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 268.97
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 280.09
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 384.56
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 9.93
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 44.75
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 57.66
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 470.53
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 541.15
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 649.12
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 71.24
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 87.0
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 714.6
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 12.83
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 924.34
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1051.77
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 108.41
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 123.99
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 141.15
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 160.08
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 17.7
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 25.88
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 199.27
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 223.52
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 34.6
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 284.31
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 310.13
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 356.19
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 428.95
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 16.37
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 61.35
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 712.02
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 139.28
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 257.24
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 35.24
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 352.27
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 471.4
   },
   {
    "model": "YJV22",
    "spec": "3x1.5",
    "price": 12.83
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 60.98
   },
   {
    "model": "YJV22",
    "spec": "3x120",
    "price": 431.86
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 455.82
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 619.97
   },
   {
    "model": "YJV22",
    "spec": "3x16",
    "price": 65.93
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 87.16
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 611.06
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 798.69
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 25.87
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 780.97
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 1021.68
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 124.78
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1279.21
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 127.88
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 163.31
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.8
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 28.68
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 169.47
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 222.34
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 28.76
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 42.26
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 247.93
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 421.0
   },
   {
    "model": "YJV22",
    "spec": "4x1.5",
    "price": 14.42
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 49.21
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 64.18
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 463.06
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 573.01
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 611.68
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 693.36
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 82.92
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 98.59
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 781.42
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 892.48
   },
   {
    "model": "YJV22",
    "spec": "4x2.5",
    "price": 18.5
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 25.27
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 987.88
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1168.58
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 123.27
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 136.35
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 25.93
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 30.58
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 37.26
   },
   {
    "model": "YJV22",
    "spec": "4x6+1x4",
    "price": 43.52
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 305.58
   },
   {
    "model": "YJV22",
    "spec": "4x70+1x35",
    "price": 328.76
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 470.35
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 69.31
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 633.75
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 772.12
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 104.42
   },
   {
    "model": "YJV22",
    "spec": "5x185",
    "price": 976.46
   },
   {
    "model": "YJV22",
    "spec": "5x2.5",
    "price": 19.78
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1230.06
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 150.89
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 201.27
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 31.05
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 298.99
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 36.35
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 294.19
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 482.96
   }
  ],
  "count": {
   "items": 82,
   "cable": 121,
   "est": 15
  }
 },
 {
  "period": "2026-9",
  "label": "2026年第9期（9月）",
  "castWater": {},
  "castDrain": {},
  "weld": {},
  "ppr": {
   "110": 171.24,
   "20": 5.99,
   "25": 8.88,
   "40": 21.54,
   "63": 55.31,
   "75": 74.71,
   "90": 113.72
  },
  "pe": {
   "110": 97.35,
   "20": 4.29,
   "25": 6.54,
   "32": 8.85,
   "50": 24.79,
   "63": 38.34,
   "75": 44.25
  },
  "pvcDrain": {
   "100": 22.57,
   "50": 8.41,
   "75": 16.37
  },
  "composite": {},
  "bridge": {
   "100x100": 52.87,
   "100x50": 40.78,
   "100x75": 47.69,
   "150x100": 66.62,
   "200x100": 80.12,
   "200x150": 110.58,
   "300x100": 138.76,
   "300x150": 156.53,
   "400x100": 164.11,
   "400x200": 233.87,
   "500x100": 244.98,
   "500x200": 257.99
  },
  "wire": {
   "BVR|1x0.75": 0.9,
   "BVR|1x1": 1.24,
   "BVR|1x1.5": 1.81,
   "BVR|1x10": 10.59,
   "BVR|1x16": 16.47,
   "BVR|1x25": 25.88,
   "BVR|1x35": 35.09,
   "BVR|1x4": 4.28,
   "BVR|1x50": 50.55,
   "BVR|1x6": 6.34,
   "BVV|2x2.5": 5.51,
   "BVV|3x1.5": 6.2,
   "BVV|3x2.5": 9.08,
   "BVV|3x4": 13.68,
   "BV|1x1.5": 1.62,
   "BV|1x120": 116.26,
   "BV|1x150": 143.57,
   "BV|1x16": 15.79,
   "BV|1x185": 179.11,
   "BV|1x2.5": 2.46,
   "BV|1x35": 31.69,
   "BV|1x50": 47.27,
   "BV|1x6": 5.79,
   "BV|1x70": 70.85,
   "BV|1x95": 92.56,
   "RVS|1x2": 2.61,
   "RVS|2x0.3": 1.0,
   "RVS|2x0.4": 1.19,
   "RVS|2x0.5": 1.47,
   "RVS|2x0.7": 1.85,
   "RVS|2x1.5": 3.7
  },
  "valve": {
   "globe": {
    "32": 61.95,
    "40": 88.05
   },
   "gate": {
    "15": 20.8,
    "20": 28.76,
    "25": 35.4,
    "32": 44.25
   },
   "butterfly": {
    "100": 309.73,
    "125": 247.79,
    "150": 292.04,
    "200": 399.12,
    "300": 1185.84,
    "450": 3477.88,
    "80": 150.44
   },
   "balance": {
    "15": 106.19,
    "20": 115.04,
    "200": 2372.56,
    "40": 326.84,
    "65": 486.79
   },
   "strainer": {
    "100": 289.5,
    "125": 437.42,
    "15": 27.91,
    "150": 684.0,
    "200": 1351.8,
    "25": 40.64,
    "250": 1908.75,
    "300": 2659.51,
    "32": 74.98,
    "40": 104.01,
    "50": 125.58,
    "65": 164.71
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 9.44
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 36.07
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 486.73
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 437.42
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 557.52
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 56.83
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 79.65
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 550.82
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 734.51
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.96
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 8.85
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 721.84
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 946.9
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 80.5
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 115.04
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 114.03
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 150.44
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 17.92
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 17.7
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 185.84
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 24.62
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 26.55
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 207.5
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 265.49
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 279.49
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 380.53
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 45.46
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 53.1
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 461.27
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 540.41
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 578.09
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 647.77
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 70.75
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 79.65
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 713.39
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 819.02
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 12.75
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 15.04
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 922.66
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1049.93
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 108.39
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 115.04
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 140.5
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 159.29
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 22.55
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 17.7
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 196.59
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 32.07
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 26.55
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 276.83
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 300.88
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 355.78
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 424.78
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 16.01
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 93.54
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 888.58
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 20.1
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1124.87
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 141.48
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 185.49
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 258.72
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 35.76
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 483.91
   },
   {
    "model": "YJV22",
    "spec": "3x10",
    "price": 40.5
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 515.66
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 474.14
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 605.62
   },
   {
    "model": "YJV22",
    "spec": "3x16",
    "price": 65.77
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 83.57
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 543.89
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 775.04
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 25.83
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 989.81
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 93.21
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 121.07
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1253.42
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 127.9
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 161.0
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.87
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 23.96
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 172.06
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 28.96
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 36.12
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 242.58
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 301.73
   },
   {
    "model": "YJV22",
    "spec": "3x95",
    "price": 317.33
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 59.37
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 482.02
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 572.12
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 567.26
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 82.36
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 92.4
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 890.67
   },
   {
    "model": "YJV22",
    "spec": "4x2.5",
    "price": 18.58
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 985.91
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 133.32
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 153.98
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 29.06
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 218.52
   },
   {
    "model": "YJV22",
    "spec": "4x50+1x25",
    "price": 247.48
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 36.8
   },
   {
    "model": "YJV22",
    "spec": "4x6+1x4",
    "price": 38.6
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 304.71
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 469.85
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 59.92
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 88.5
   },
   {
    "model": "YJV22",
    "spec": "5x2.5",
    "price": 19.58
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1165.65
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 389.38
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 442.48
   }
  ],
  "count": {
   "items": 63,
   "cable": 110,
   "est": 37
  }
 },
 {
  "period": "2026-8",
  "label": "2026年第8期（8月）",
  "castWater": {
   "100": 91.59,
   "150": 114.8,
   "200": 153.42,
   "250": 198.73,
   "300": 295.88,
   "400": 362.19,
   "500": 508.6,
   "80": 87.42
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {
   "65": 137.93
  },
  "ppr": {
   "110": 171.99,
   "20": 6.46,
   "32": 14.07,
   "50": 34.95,
   "63": 55.43,
   "75": 79.08,
   "90": 114.15
  },
  "pe": {
   "110": 102.3,
   "20": 4.33,
   "25": 5.94,
   "32": 9.11,
   "40": 14.12,
   "50": 21.97,
   "63": 33.83,
   "90": 71.35
  },
  "pvcDrain": {
   "100": 22.58,
   "150": 45.94,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x100": 52.94,
   "100x50": 40.84,
   "100x75": 47.76,
   "150x100": 66.71,
   "200x100": 80.23,
   "200x150": 110.73,
   "300x100": 138.96,
   "300x150": 156.75,
   "400x100": 164.33,
   "400x150": 203.96,
   "400x200": 234.24,
   "500x100": 245.32,
   "500x200": 258.34,
   "600x100": 279.98,
   "600x200": 302.51,
   "800x200": 343.92
  },
  "wire": {
   "BVR|1x0.75": 0.91,
   "BVR|1x1": 1.24,
   "BVR|1x1.5": 1.8,
   "BVR|1x10": 9.31,
   "BVR|1x2.5": 2.82,
   "BVR|1x35": 34.96,
   "BVR|1x4": 4.26,
   "BVR|1x6": 5.59,
   "BVV|2x2.5": 5.49,
   "BVV|3x1.5": 6.16,
   "BVV|3x2.5": 9.04,
   "BVV|3x4": 13.61,
   "BV|1x1": 1.21,
   "BV|1x1.5": 1.6,
   "BV|1x10": 10.22,
   "BV|1x120": 114.45,
   "BV|1x16": 15.55,
   "BV|1x185": 176.4,
   "BV|1x2.5": 2.17,
   "BV|1x25": 22.85,
   "BV|1x35": 31.17,
   "BV|1x4": 2.97,
   "BV|1x6": 5.69,
   "BV|1x70": 69.78,
   "BV|1x95": 91.11,
   "RVS|1x2": 2.6,
   "RVS|2x0.3": 1.0,
   "RVS|2x0.4": 1.19,
   "RVS|2x0.5": 1.46,
   "RVS|2x0.7": 1.85,
   "RVS|2x1.5": 3.68
  },
  "valve": {
   "globe": {
    "20": 31.97,
    "25": 45.73,
    "32": 62.72,
    "40": 88.38
   },
   "gate": {
    "15": 20.9,
    "20": 28.61,
    "25": 37.55,
    "32": 51.12,
    "40": 75.76
   },
   "butterfly": {
    "100": 184.58,
    "125": 248.58,
    "150": 292.95,
    "200": 708.49,
    "250": 906.08,
    "350": 1493.95,
    "400": 2726.38,
    "450": 3480.93,
    "65": 133.63
   },
   "balance": {
    "125": 1138.14,
    "20": 123.56,
    "32": 246.64,
    "40": 326.84,
    "50": 407.73,
    "65": 492.85,
    "80": 674.77
   },
   "strainer": {
    "100": 314.51,
    "125": 428.81,
    "15": 27.91,
    "150": 684.0,
    "20": 31.12,
    "200": 1351.8,
    "25": 40.64,
    "250": 1908.75,
    "300": 2659.51,
    "32": 75.07,
    "40": 104.12,
    "50": 125.58,
    "65": 164.71,
    "80": 210.21
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 9.44
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 35.6
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 54.16
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 353.56
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 430.53
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 555.57
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 56.08
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 80.62
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 542.45
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 725.41
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.8
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 711.19
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 79.45
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 117.54
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 149.03
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 20.56
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 151.76
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 189.6
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 33.65
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 264.98
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 274.69
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.6
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 44.85
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 56.82
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 453.42
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 568.66
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 639.1
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 69.81
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 85.73
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 702.19
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 807.83
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 15.44
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1036.01
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 105.21
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 122.17
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 157.73
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 22.25
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 25.51
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 192.24
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 220.24
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 31.65
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 34.11
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 271.45
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 305.58
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 349.27
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 422.62
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 584.5
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 77.98
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 135.5
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 175.96
   },
   {
    "model": "YJV",
    "spec": "5x4",
    "price": 24.47
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 251.73
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 34.72
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 345.33
   },
   {
    "model": "YJV22",
    "spec": "2x25+2x25",
    "price": 219.12
   },
   {
    "model": "YJV22",
    "spec": "3x1.5",
    "price": 12.6
   },
   {
    "model": "YJV22",
    "spec": "3x10",
    "price": 41.63
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 60.12
   },
   {
    "model": "YJV22",
    "spec": "3x120",
    "price": 385.48
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 515.32
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 467.73
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 610.93
   },
   {
    "model": "YJV22",
    "spec": "3x16",
    "price": 64.91
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 85.91
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 602.05
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 787.06
   },
   {
    "model": "YJV22",
    "spec": "3x2+2x1.5",
    "price": 25.56
   },
   {
    "model": "YJV22",
    "spec": "3x2.5",
    "price": 17.08
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 769.67
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 1006.74
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 82.21
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 122.96
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1260.43
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 126.23
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 160.97
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.59
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 28.28
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 166.58
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 28.6
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 41.66
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 239.45
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 304.35
   },
   {
    "model": "YJV22",
    "spec": "3x95",
    "price": 313.22
   },
   {
    "model": "YJV22",
    "spec": "4x1.5",
    "price": 13.83
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 51.44
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 63.27
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 475.81
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 564.7
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 602.27
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 683.09
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 81.29
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 97.19
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 769.64
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 879.1
   },
   {
    "model": "YJV22",
    "spec": "4x2+1x1.5",
    "price": 24.96
   },
   {
    "model": "YJV22",
    "spec": "4x2.5",
    "price": 17.86
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1151.54
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 121.07
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 167.68
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 179.65
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 25.2
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 30.15
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 215.69
   },
   {
    "model": "YJV22",
    "spec": "4x50+1x25",
    "price": 222.6
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 36.33
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 300.75
   },
   {
    "model": "YJV22",
    "spec": "4x70+1x35",
    "price": 323.58
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 393.65
   }
  ],
  "count": {
   "items": 78,
   "cable": 110,
   "est": 6
  }
 },
 {
  "period": "2026-7",
  "label": "2026年第7期（7月）",
  "castWater": {
   "100": 91.64,
   "200": 153.18,
   "250": 198.41,
   "300": 295.46,
   "400": 361.65,
   "500": 458.15,
   "80": 87.42
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11
  },
  "weld": {},
  "ppr": {
   "25": 8.85,
   "40": 24.61,
   "50": 34.95,
   "63": 55.43,
   "75": 79.08,
   "90": 114.15
  },
  "pe": {
   "110": 102.3,
   "25": 5.94,
   "32": 9.11,
   "50": 21.97,
   "63": 33.83,
   "75": 46.2,
   "90": 71.35
  },
  "pvcDrain": {
   "100": 25.32,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x100": 51.77,
   "100x50": 40.27,
   "150x100": 57.79,
   "200x100": 78.32,
   "300x100": 136.73,
   "300x150": 153.54,
   "400x100": 161.5,
   "400x150": 200.44,
   "500x200": 253.54,
   "600x100": 539.3
  },
  "wire": {
   "BVR|1x0.75": 0.89,
   "BVR|1x1.5": 1.76,
   "BVR|1x10": 10.32,
   "BVR|1x16": 16.04,
   "BVR|1x2.5": 2.75,
   "BVR|1x25": 25.21,
   "BVR|1x35": 34.19,
   "BVR|1x50": 49.44,
   "BVV|2x2.5": 5.37,
   "BVV|3x1.5": 6.03,
   "BV|1x150": 138.21,
   "BV|1x16": 15.2,
   "BV|1x185": 172.43,
   "RVS|1x2": 2.54,
   "RVS|2x0.3": 0.98,
   "RVS|2x0.5": 1.43,
   "RVS|2x1.5": 3.6
  },
  "valve": {
   "globe": {
    "25": 45.68
   },
   "gate": {
    "15": 20.88,
    "25": 37.5,
    "32": 51.12,
    "40": 75.67,
    "50": 104.58
   },
   "butterfly": {
    "100": 184.57,
    "125": 248.65,
    "150": 421.04,
    "200": 710.7,
    "250": 910.5,
    "400": 2726.38,
    "50": 119.15,
    "65": 133.61
   },
   "balance": {
    "65": 486.82
   },
   "strainer": {
    "100": 315.49,
    "125": 428.68,
    "150": 684.51,
    "20": 31.42,
    "200": 1354.42,
    "25": 41.15,
    "250": 1911.95,
    "300": 2662.39,
    "32": 75.66,
    "50": 126.11
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 52.99
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 346.11
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 470.07
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 544.0
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 55.31
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 78.87
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 530.53
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 710.44
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.92
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 14.64
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 695.49
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 915.72
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 78.05
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 114.85
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 109.29
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 145.67
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 17.7
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 21.83
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 148.94
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 185.53
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 24.16
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 32.92
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 199.73
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 259.29
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 268.5
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 370.85
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.8
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 44.25
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 55.54
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 444.16
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 522.21
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 556.9
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 625.49
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 68.58
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 83.8
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 687.43
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 790.8
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 12.92
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 15.13
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1014.07
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 103.19
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 119.48
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 134.16
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 154.46
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 22.21
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.99
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 215.35
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 31.33
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 33.38
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 299.39
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 342.21
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 16.37
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 59.08
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 684.73
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 19.82
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1090.85
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 132.42
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 246.23
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 33.93
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 337.88
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 452.34
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 58.83
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 503.47
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 597.57
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 83.97
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 534.55
   },
   {
    "model": "YJV22",
    "spec": "3x2.5",
    "price": 17.08
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 25.0
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 984.17
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 96.06
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1233.5
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 123.31
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 157.56
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.12
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 27.7
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 214.5
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 40.76
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 234.42
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 297.98
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 405.5
   },
   {
    "model": "YJV22",
    "spec": "4x1.5",
    "price": 11.27
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 50.71
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 61.81
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 466.02
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 589.12
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 667.58
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 80.0
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 94.96
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 752.39
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 859.41
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 951.68
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1125.65
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 118.94
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 131.62
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 164.34
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 175.92
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 25.04
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 29.51
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 211.06
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 35.93
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 285.42
   },
   {
    "model": "YJV22",
    "spec": "4x70+1x35",
    "price": 316.84
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 385.22
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 453.03
   },
   {
    "model": "YJV22",
    "spec": "5x1.5",
    "price": 16.47
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 66.84
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 609.99
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 743.55
   },
   {
    "model": "YJV22",
    "spec": "5x185",
    "price": 940.51
   },
   {
    "model": "YJV22",
    "spec": "5x2.5",
    "price": 22.48
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1185.04
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 145.24
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 194.03
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 29.95
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 288.7
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 42.42
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 378.73
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 468.91
   }
  ],
  "count": {
   "items": 53,
   "cable": 118,
   "est": 10
  }
 },
 {
  "period": "2026-6",
  "label": "2026年第6期（6月）",
  "castWater": {
   "300": 295.75,
   "400": 361.68
  },
  "castDrain": {
   "100": 12.83,
   "150": 21.5,
   "75": 11.06
  },
  "weld": {},
  "ppr": {
   "20": 6.03,
   "25": 8.96,
   "32": 13.63,
   "40": 21.64,
   "50": 34.96,
   "63": 55.31,
   "75": 79.2,
   "90": 113.72
  },
  "pe": {
   "110": 102.21,
   "20": 4.29,
   "25": 5.75,
   "50": 21.68,
   "63": 30.51,
   "75": 28.76,
   "90": 71.24
  },
  "pvcDrain": {
   "100": 23.01,
   "150": 46.37,
   "50": 8.58,
   "75": 16.73
  },
  "composite": {},
  "bridge": {
   "100x100": 51.9,
   "100x75": 46.82,
   "200x100": 78.63,
   "200x150": 108.5,
   "300x100": 136.23,
   "300x150": 153.65,
   "400x100": 161.04,
   "400x150": 199.95,
   "400x200": 229.68,
   "500x200": 253.28,
   "600x100": 274.45
  },
  "wire": {
   "BVR|1x0.75": 0.89,
   "BVR|1x1": 1.21,
   "BVR|1x1.5": 1.77,
   "BVR|1x10": 10.34,
   "BVR|1x16": 16.07,
   "BVR|1x2.5": 2.76,
   "BVR|1x25": 25.27,
   "BVR|1x35": 34.27,
   "BVR|1x4": 4.18,
   "BVR|1x50": 49.37,
   "BVR|1x6": 4.95,
   "BVV|1x3": 4.22,
   "BVV|3x2.5": 8.86,
   "BVV|3x4": 13.35,
   "BV|1x10": 10.0,
   "BV|1x150": 138.61,
   "BV|1x16": 15.24,
   "BV|1x35": 30.56,
   "BV|1x4": 3.65,
   "BV|1x50": 45.69,
   "BV|1x6": 5.57,
   "BV|1x70": 68.38,
   "BV|1x95": 89.26,
   "RVS|1x2": 2.55,
   "RVS|2x0.3": 0.98,
   "RVS|2x0.4": 1.17,
   "RVS|2x0.5": 1.43,
   "RVS|2x0.7": 1.81,
   "RVS|2x1.5": 3.61
  },
  "valve": {
   "globe": {
    "15": 22.21,
    "32": 63.01,
    "40": 88.58,
    "50": 131.15
   },
   "gate": {
    "15": 21.15,
    "20": 28.94,
    "25": 37.88,
    "32": 51.5,
    "40": 76.02
   },
   "butterfly": {
    "100": 184.87,
    "125": 248.85,
    "150": 442.83,
    "200": 711.06,
    "300": 1197.79,
    "350": 1495.66,
    "400": 2726.81,
    "450": 3481.33,
    "50": 119.47,
    "500": 4225.04,
    "80": 157.88
   },
   "balance": {
    "100": 893.5,
    "15": 113.54,
    "150": 1454.25,
    "25": 162.56,
    "50": 408.17,
    "65": 487.18
   },
   "strainer": {
    "100": 315.31,
    "125": 428.81,
    "15": 27.91,
    "150": 592.19,
    "20": 31.12,
    "200": 1354.45,
    "25": 40.99,
    "250": 1911.7,
    "300": 2662.46,
    "32": 75.38,
    "40": 104.52,
    "50": 125.85,
    "65": 165.06,
    "80": 228.42
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 9.44
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 34.87
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 53.27
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 345.61
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 469.72
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 420.54
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 544.23
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 54.81
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 78.77
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 530.07
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 709.58
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.46
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 14.81
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 694.33
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 914.35
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 77.56
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 108.78
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 145.63
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 17.26
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 21.81
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 148.21
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 185.6
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 23.71
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 33.27
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 198.96
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 259.35
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 267.88
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 370.78
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.38
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 43.81
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 55.52
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 443.15
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 555.84
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 624.82
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 68.12
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 83.75
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 686.88
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 790.1
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 12.49
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 15.11
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 807.58
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1013.83
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 102.7
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 119.48
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 133.71
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 154.5
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 21.78
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.98
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 188.19
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 201.65
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 33.38
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 265.39
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 299.5
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 341.86
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 412.94
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 16.01
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 572.04
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 684.13
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 84.09
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 842.73
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 19.42
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 975.54
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 132.49
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 172.21
   },
   {
    "model": "YJV",
    "spec": "5x4",
    "price": 23.96
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 246.02
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 33.93
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 337.49
   },
   {
    "model": "YJV22",
    "spec": "3x10",
    "price": 40.6
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 58.8
   },
   {
    "model": "YJV22",
    "spec": "3x120",
    "price": 376.6
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 503.53
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 455.99
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 539.15
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 83.95
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 588.72
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 770.72
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 24.94
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 752.85
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 983.73
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 89.71
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 120.24
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1232.5
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 123.24
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 157.45
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.07
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 27.69
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 162.42
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 214.23
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 25.21
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 233.48
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 298.1
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 405.51
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 50.19
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 61.7
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 465.08
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 551.53
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 588.17
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 667.12
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 79.41
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 94.83
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 24.31
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 950.78
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1124.65
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 106.72
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 163.63
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 175.72
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 24.61
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 29.44
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 210.43
   },
   {
    "model": "YJV22",
    "spec": "4x50+1x25",
    "price": 222.6
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 35.42
   },
   {
    "model": "YJV22",
    "spec": "4x6+1x4",
    "price": 41.91
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 293.46
   },
   {
    "model": "YJV22",
    "spec": "4x70+1x35",
    "price": 316.66
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 452.56
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 67.17
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 742.83
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 100.8
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 145.4
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 194.07
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 30.27
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 288.76
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 42.74
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 378.76
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 486.73
   }
  ],
  "count": {
   "items": 66,
   "cable": 126,
   "est": 6
  }
 },
 {
  "period": "2026-5",
  "label": "2026年第5期（5月）",
  "castWater": {},
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {},
  "ppr": {
   "110": 171.99,
   "20": 6.03,
   "25": 8.96,
   "32": 13.63,
   "40": 21.64,
   "50": 34.95,
   "63": 55.43,
   "75": 79.08,
   "90": 114.15
  },
  "pe": {
   "110": 102.3,
   "20": 4.33,
   "25": 5.94,
   "32": 9.11,
   "40": 14.12,
   "50": 21.97,
   "63": 33.83,
   "75": 46.2,
   "90": 71.35
  },
  "pvcDrain": {
   "100": 25.32,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x75": 46.82,
   "200x100": 78.63,
   "200x150": 108.5,
   "300x100": 136.24,
   "300x150": 153.65,
   "400x100": 161.04,
   "400x150": 199.96,
   "400x200": 229.7,
   "500x100": 240.47,
   "500x200": 253.29,
   "600x100": 274.47,
   "600x200": 296.67,
   "800x200": 337.17
  },
  "wire": {
   "BVR|1x0.75": 0.89,
   "BVR|1x1": 1.21,
   "BVR|1x1.5": 1.76,
   "BVR|1x10": 10.32,
   "BVR|1x2.5": 2.75,
   "BVR|1x25": 25.21,
   "BVR|1x35": 34.18,
   "BVR|1x4": 4.17,
   "BVR|1x50": 49.25,
   "BVR|1x6": 6.17,
   "BVV|2x2.5": 5.36,
   "BVV|3x1.5": 6.03,
   "BVV|3x2.5": 8.84,
   "BV|1x1": 1.17,
   "BV|1x10": 9.96,
   "BV|1x120": 111.65,
   "BV|1x150": 138.03,
   "BV|1x16": 15.17,
   "BV|1x185": 172.12,
   "BV|1x25": 22.31,
   "BV|1x35": 30.42,
   "BV|1x50": 45.47,
   "BV|1x6": 5.55,
   "BV|1x70": 68.08,
   "BV|1x95": 88.85,
   "RVS|1x2": 2.54,
   "RVS|2x0.3": 0.98,
   "RVS|2x0.4": 1.16,
   "RVS|2x0.5": 1.43,
   "RVS|2x0.7": 1.81,
   "RVS|2x1.5": 3.6
  },
  "valve": {
   "globe": {
    "40": 88.19
   },
   "gate": {
    "15": 20.87,
    "25": 37.48,
    "32": 51.12,
    "40": 75.62,
    "50": 104.58
   },
   "butterfly": {
    "100": 184.44,
    "150": 292.43,
    "200": 710.7,
    "350": 1495.27,
    "50": 119.07,
    "500": 4224.67,
    "65": 133.51,
    "80": 157.52
   },
   "balance": {
    "100": 972.42,
    "15": 113.1,
    "150": 1454.25,
    "200": 2376.98,
    "25": 162.56,
    "40": 327.02,
    "50": 416.33,
    "65": 493.65,
    "80": 675.65
   },
   "strainer": {
    "100": 315.31,
    "125": 437.42,
    "15": 27.91,
    "150": 684.29,
    "20": 31.12,
    "200": 1354.45,
    "25": 40.99,
    "250": 1911.7,
    "300": 2662.46,
    "32": 75.38,
    "40": 104.52,
    "50": 125.85,
    "65": 165.06
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 6.52
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 34.75
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 51.57
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 344.44
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 468.08
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 419.08
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 542.3
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 54.62
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 78.5
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 707.11
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 12.42
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 14.56
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 691.85
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 911.12
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 77.29
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 119.61
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 97.96
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 145.13
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 17.2
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 21.73
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 147.73
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 184.95
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 23.64
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 32.34
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 198.27
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 278.04
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 266.96
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 369.48
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.35
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 43.65
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 55.35
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 441.63
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 519.75
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 504.88
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 622.24
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 67.88
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 85.51
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 684.49
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 786.92
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 12.46
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 15.05
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 884.8
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 1009.65
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 102.35
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 133.25
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 153.86
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 21.71
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.9
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 187.56
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 214.54
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 30.83
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 33.85
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 264.49
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 298.25
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 340.65
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 411.24
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 16.01
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 57.61
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 570.08
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 83.81
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 839.75
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 19.36
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1085.75
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 132.04
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 171.62
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 33.81
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 336.34
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 58.69
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 502.5
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 454.95
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 596.64
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 83.78
   },
   {
    "model": "YJV22",
    "spec": "3x18+2x95",
    "price": 769.17
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1",
    "price": 24.91
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 751.29
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 981.75
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 114.14
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1229.98
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 157.13
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 27.99
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 213.81
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 27.9
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 297.5
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 404.71
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 61.58
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 476.11
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 664.7
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 79.27
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 94.65
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 855.63
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 24.28
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 932.74
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 130.54
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 162.73
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 174.65
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 24.57
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 29.39
   },
   {
    "model": "YJV22",
    "spec": "4x50+1x25",
    "price": 222.6
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 279.65
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 450.78
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 66.6
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 607.16
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 739.89
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 100.2
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1179.77
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 144.1
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 192.58
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 287.01
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 42.26
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 376.79
   }
  ],
  "count": {
   "items": 71,
   "cable": 111,
   "est": 13
  }
 },
 {
  "period": "2026-4",
  "label": "2026年第4期（4月）",
  "castWater": {
   "100": 91.56,
   "150": 114.34,
   "200": 152.96,
   "250": 198.1,
   "300": 295.12,
   "500": 506.91
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {},
  "ppr": {
   "110": 171.99,
   "20": 6.46,
   "40": 21.64,
   "63": 55.43,
   "75": 79.08,
   "90": 114.15
  },
  "pe": {
   "110": 102.94,
   "20": 4.33,
   "25": 5.94,
   "32": 9.11,
   "40": 14.12,
   "50": 21.97,
   "63": 33.83,
   "75": 46.2,
   "90": 71.35
  },
  "pvcDrain": {
   "100": 22.58,
   "150": 45.94,
   "50": 8.14
  },
  "composite": {},
  "bridge": {
   "100x100": 51.77,
   "100x50": 40.27,
   "150x100": 65.75,
   "200x100": 78.94,
   "200x150": 108.76,
   "300x100": 136.46,
   "300x150": 153.89,
   "400x100": 160.83,
   "400x200": 229.42,
   "500x100": 240.21,
   "500x200": 253.03,
   "600x100": 274.18,
   "800x200": 336.82
  },
  "wire": {
   "BVR|1x0.75": 0.88,
   "BVR|1x1": 1.2,
   "BVR|1x1.5": 1.76,
   "BVR|1x10": 9.19,
   "BVR|1x2.5": 2.75,
   "BVR|1x25": 24.78,
   "BVR|1x35": 34.11,
   "BVR|1x4": 4.16,
   "BVR|1x50": 49.15,
   "BVR|1x6": 6.16,
   "BVV|3x1.5": 6.01,
   "BVV|3x2.5": 8.82,
   "BV|1x1": 0.91,
   "BV|1x1.5": 1.51,
   "BV|1x10": 9.68,
   "BV|1x16": 14.74,
   "BV|1x185": 167.22,
   "BV|1x2.5": 2.29,
   "BV|1x25": 21.71,
   "BV|1x4": 3.55,
   "BV|1x50": 44.25,
   "BV|1x6": 5.4,
   "RVS|1x2": 2.54,
   "RVS|2x0.3": 0.97,
   "RVS|2x0.4": 1.16,
   "RVS|2x0.5": 1.43,
   "RVS|2x0.7": 1.8
  },
  "valve": {
   "globe": {
    "32": 62.54,
    "40": 88.1,
    "50": 130.66
   },
   "gate": {
    "25": 37.43,
    "32": 51.12,
    "40": 75.55
   },
   "butterfly": {
    "100": 184.26,
    "125": 248.24,
    "150": 292.16,
    "300": 1197.4,
    "400": 2726.38,
    "450": 3480.93,
    "50": 118.95,
    "500": 4224.67,
    "65": 133.37,
    "80": 157.37
   },
   "balance": {
    "125": 1132.74,
    "15": 113.1,
    "150": 1451.33,
    "20": 123.6,
    "200": 2371.68
   },
   "strainer": {
    "100": 315.49,
    "125": 437.61,
    "150": 684.51,
    "20": 31.42,
    "200": 1354.42,
    "25": 41.15,
    "250": 1911.95,
    "32": 75.66,
    "40": 104.87,
    "50": 126.11,
    "65": 165.04
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 34.07
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 51.35
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 335.31
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 455.79
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 408.5
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 528.37
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 514.25
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 688.52
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 673.36
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 887.18
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 74.78
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 111.35
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 105.75
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 141.35
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 16.37
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 21.19
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 143.81
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 179.85
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 22.57
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 31.92
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 192.48
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 251.68
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 359.38
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 42.43
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 53.88
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 442.48
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 539.35
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 601.77
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 66.09
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 81.29
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 666.6
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 761.06
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 14.67
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 973.45
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 99.53
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 115.91
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 129.76
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 149.66
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 21.1
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.61
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 182.39
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 198.53
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 30.03
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 32.37
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 257.23
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 290.58
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 334.57
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 400.01
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 15.81
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 57.27
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 555.6
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 664.09
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 817.87
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1057.25
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 128.42
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 167.16
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 238.49
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 32.94
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 327.14
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 438.87
   },
   {
    "model": "YJV22",
    "spec": "2x6+2x6",
    "price": 57.16
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 488.81
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 443.98
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 580.45
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 81.61
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 749.31
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 24.28
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 732.04
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 954.84
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 87.17
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 116.73
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1196.41
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 153.12
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 20.05
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 157.96
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 208.02
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 26.99
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 40.39
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 289.39
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 394.14
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 48.79
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 59.98
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 476.11
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 646.02
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 77.19
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 92.19
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 831.86
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 23.67
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1088.5
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 114.34
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 127.14
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 158.42
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 170.12
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 16.17
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 184.29
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 34.43
   },
   {
    "model": "YJV22",
    "spec": "4x6+1x4",
    "price": 40.74
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 372.69
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 398.23
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 64.78
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 591.29
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 720.58
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 97.58
   },
   {
    "model": "YJV22",
    "spec": "5x185",
    "price": 912.7
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1149.21
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 140.12
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 187.38
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 29.04
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 279.89
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 41.14
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 367.04
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 471.18
   }
  ],
  "count": {
   "items": 67,
   "cable": 112,
   "est": 2
  }
 },
 {
  "period": "2026-3",
  "label": "2026年第3期（3月）",
  "castWater": {
   "100": 88.5,
   "200": 150.44,
   "250": 194.69,
   "300": 292.04,
   "400": 353.98,
   "500": 619.47,
   "80": 79.65
  },
  "castDrain": {
   "100": 13.54,
   "150": 21.5
  },
  "weld": {
   "25": 1.86
  },
  "ppr": {
   "110": 172.39,
   "32": 13.63,
   "40": 21.64,
   "50": 35.31,
   "63": 55.84,
   "75": 79.47
  },
  "pe": {
   "110": 102.74,
   "20": 4.69,
   "25": 6.37,
   "32": 9.47,
   "40": 14.51,
   "50": 22.39,
   "63": 34.25,
   "75": 46.64,
   "90": 71.77
  },
  "pvcDrain": {
   "100": 23.01,
   "150": 45.94,
   "50": 8.58
  },
  "composite": {},
  "bridge": {
   "100x100": 51.87,
   "100x50": 40.01,
   "100x75": 46.79,
   "150x100": 65.35,
   "200x100": 78.58,
   "200x150": 108.42,
   "300x100": 136.13,
   "300x150": 153.54,
   "400x100": 160.93,
   "400x150": 199.81,
   "400x200": 229.5,
   "500x100": 240.29,
   "500x200": 253.12,
   "600x100": 274.27
  },
  "wire": {
   "BVR|1x0.75": 0.89,
   "BVR|1x1": 1.21,
   "BVR|1x1.5": 1.77,
   "BVR|1x16": 16.07,
   "BVR|1x2.5": 2.76,
   "BVR|1x25": 25.28,
   "BVR|1x35": 34.29,
   "BVR|1x4": 4.18,
   "BVR|1x6": 5.45,
   "BVV|2x2.5": 5.35,
   "BVV|3x1.5": 6.05,
   "BVV|3x4": 13.34,
   "BV|1x1": 1.15,
   "BV|1x1.5": 1.53,
   "BV|1x10": 9.75,
   "BV|1x16": 14.87,
   "BV|1x185": 168.63,
   "BV|1x2.5": 2.31,
   "BV|1x25": 21.92,
   "BV|1x50": 44.59,
   "BV|1x6": 5.44,
   "BV|1x70": 66.74,
   "BV|1x95": 87.04,
   "RVS|1x2": 2.55,
   "RVS|2x0.3": 0.88,
   "RVS|2x0.4": 1.17,
   "RVS|2x0.5": 1.43,
   "RVS|2x0.7": 1.81,
   "RVS|2x1.5": 3.61
  },
  "valve": {
   "globe": {
    "15": 21.68,
    "20": 32.3,
    "32": 62.74,
    "40": 88.23
   },
   "gate": {
    "15": 21.24,
    "20": 28.85,
    "32": 51.5,
    "50": 104.96
   },
   "butterfly": {
    "100": 317.83,
    "125": 353.06,
    "200": 710.7,
    "250": 910.5,
    "300": 1197.4,
    "400": 2726.38,
    "50": 118.97,
    "500": 4224.67,
    "65": 133.4,
    "80": 170.8
   },
   "balance": {
    "100": 972.42,
    "125": 1139.91,
    "15": 113.1,
    "150": 1454.25,
    "20": 123.6,
    "25": 162.56,
    "32": 246.64,
    "40": 327.02,
    "65": 493.65,
    "80": 675.65
   },
   "strainer": {
    "100": 315.31,
    "125": 437.42,
    "15": 27.91,
    "150": 684.29,
    "20": 31.12,
    "200": 1345.72,
    "25": 40.99,
    "250": 1903.44,
    "300": 2659.78,
    "32": 75.46,
    "40": 104.64,
    "50": 126.0,
    "65": 165.24,
    "80": 228.42
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "2x6+2x6",
    "price": 51.81
   },
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 9.21
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 34.09
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 337.62
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 459.74
   },
   {
    "model": "YJV",
    "spec": "3x150",
    "price": 411.58
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 531.35
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 77.1
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 518.44
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 692.04
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 10.98
   },
   {
    "model": "YJV",
    "spec": "3x2.5+2x1.5",
    "price": 14.96
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 679.24
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 892.55
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 75.81
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 112.25
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 106.37
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 142.55
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 16.83
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 21.42
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 144.99
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 181.56
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 23.12
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 32.12
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 194.49
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 254.07
   },
   {
    "model": "YJV",
    "spec": "3x95",
    "price": 261.75
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.12
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 42.75
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 54.42
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 433.48
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 510.1
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 610.49
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 66.58
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 82.11
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 672.04
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 776.4
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 11.96
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 14.81
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 868.88
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 991.36
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 100.27
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 117.12
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 130.66
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 21.26
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.87
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 183.84
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 211.33
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 30.21
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 32.66
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 258.44
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 293.21
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 336.8
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 403.51
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 15.92
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 57.96
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 560.62
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 722.05
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 82.74
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 825.22
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 18.96
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 129.65
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 168.58
   },
   {
    "model": "YJV",
    "spec": "5x4",
    "price": 23.45
   },
   {
    "model": "YJV",
    "spec": "5x6",
    "price": 33.19
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 329.65
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 442.92
   },
   {
    "model": "YJV22",
    "spec": "3x10",
    "price": 39.73
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 57.17
   },
   {
    "model": "YJV22",
    "spec": "3x120",
    "price": 368.49
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 489.29
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 447.76
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 582.39
   },
   {
    "model": "YJV22",
    "spec": "3x16",
    "price": 61.91
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 82.21
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 576.47
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 751.42
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 25.18
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 737.27
   },
   {
    "model": "YJV22",
    "spec": "3x240+2x120",
    "price": 958.05
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 87.77
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 117.35
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1199.29
   },
   {
    "model": "YJV22",
    "spec": "3x35",
    "price": 120.44
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 19.61
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 27.88
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 158.99
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 208.41
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 35.4
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 228.5
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 293.81
   },
   {
    "model": "YJV22",
    "spec": "3x95",
    "price": 298.99
   },
   {
    "model": "YJV22",
    "spec": "3x95+2x50",
    "price": 398.94
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 49.11
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 60.8
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 454.34
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 538.77
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 575.13
   },
   {
    "model": "YJV22",
    "spec": "4x150+1x70",
    "price": 651.96
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 77.7
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 93.19
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 734.74
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 840.28
   },
   {
    "model": "YJV22",
    "spec": "4x2.5",
    "price": 17.03
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 24.25
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 921.33
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 115.09
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 128.41
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 159.42
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 172.21
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 15.7
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 205.44
   },
   {
    "model": "YJV22",
    "spec": "4x50+1x25",
    "price": 223.01
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 28.02
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 286.65
   },
   {
    "model": "YJV22",
    "spec": "4x70+1x35",
    "price": 309.25
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 375.4
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 65.04
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 596.02
   },
   {
    "model": "YJV22",
    "spec": "5x185",
    "price": 915.49
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1158.85
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 141.15
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 28.76
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 281.86
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 474.78
   }
  ],
  "count": {
   "items": 71,
   "cable": 125,
   "est": 3
  }
 },
 {
  "period": "2026-2",
  "label": "2026年第2期（2月）",
  "castWater": {
   "100": 91.57,
   "150": 114.53,
   "200": 153.09,
   "250": 198.44,
   "300": 295.59,
   "400": 361.65,
   "500": 508.03
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {},
  "ppr": {
   "110": 171.99,
   "20": 6.03,
   "25": 8.96,
   "32": 13.63,
   "40": 21.64,
   "50": 34.95
  },
  "pe": {
   "110": 102.3,
   "20": 4.33,
   "25": 5.94,
   "32": 9.11,
   "40": 14.12,
   "50": 21.97,
   "63": 32.07,
   "75": 46.25
  },
  "pvcDrain": {
   "100": 22.58,
   "150": 45.94,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x100": 51.88,
   "100x50": 40.03,
   "100x75": 46.81,
   "150x100": 65.36,
   "200x100": 78.6,
   "200x150": 108.46,
   "300x100": 136.18,
   "300x150": 153.59,
   "400x100": 160.98,
   "400x150": 199.88,
   "400x200": 229.59,
   "500x100": 240.37,
   "500x200": 253.19,
   "600x100": 274.36,
   "800x200": 337.04
  },
  "wire": {
   "BVR|1x0.75": 0.85,
   "BVR|1x1.5": 1.73,
   "BVR|1x2.5": 2.65,
   "BVR|1x25": 25.22,
   "BVR|1x35": 34.22,
   "BVR|1x4": 4.18,
   "BVR|1x50": 49.49,
   "BVR|1x6": 5.86,
   "BVV|3x1.5": 6.04,
   "BVV|3x2.5": 8.85,
   "BVV|3x4": 13.34,
   "BV|1x1.5": 1.52,
   "BV|1x10": 9.71,
   "BV|1x120": 109.54,
   "BV|1x150": 135.19,
   "BV|1x16": 14.82,
   "BV|1x185": 168.56,
   "BV|1x25": 21.88,
   "BV|1x35": 29.83,
   "BV|1x4": 3.57,
   "BV|1x50": 44.55,
   "BV|1x6": 5.4,
   "BV|1x70": 66.69,
   "BV|1x95": 86.99,
   "RVS|1x2": 2.55,
   "RVS|2x0.3": 0.98,
   "RVS|2x0.4": 1.17,
   "RVS|2x0.5": 1.43,
   "RVS|2x0.7": 1.81,
   "RVS|2x1.5": 3.61
  },
  "valve": {
   "globe": {
    "50": 130.27
   },
   "gate": {
    "15": 20.86,
    "20": 28.5,
    "32": 51.12,
    "40": 75.33,
    "50": 104.58
   },
   "butterfly": {
    "100": 184.37,
    "125": 248.39,
    "150": 292.33,
    "250": 910.5,
    "300": 1293.09,
    "350": 1495.27,
    "400": 2726.38,
    "450": 3480.93,
    "500": 4224.67,
    "65": 133.46,
    "80": 157.47
   },
   "balance": {
    "100": 972.42,
    "125": 1139.91,
    "150": 1454.25,
    "200": 2376.98,
    "32": 246.64,
    "40": 327.02,
    "50": 416.33,
    "65": 493.65,
    "80": 675.65
   },
   "strainer": {
    "100": 315.31,
    "125": 437.42,
    "15": 27.91,
    "150": 684.29,
    "20": 31.12,
    "200": 1345.72,
    "25": 40.99,
    "250": 1903.44,
    "300": 2659.78,
    "32": 75.46,
    "40": 104.64,
    "50": 126.0,
    "65": 165.24,
    "80": 228.42
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x1.5",
    "price": 9.21
   },
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 34.08
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 51.81
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 337.56
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 459.65
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 531.24
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 53.52
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 77.08
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 691.89
   },
   {
    "model": "YJV",
    "spec": "3x2.5",
    "price": 14.54
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 679.11
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 892.35
   },
   {
    "model": "YJV",
    "spec": "3x25",
    "price": 75.81
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 112.22
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 142.52
   },
   {
    "model": "YJV",
    "spec": "3x4",
    "price": 16.83
   },
   {
    "model": "YJV",
    "spec": "3x50",
    "price": 144.96
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 181.52
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 23.12
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 32.12
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 194.45
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 254.02
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 362.45
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.23
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 42.74
   },
   {
    "model": "YJV",
    "spec": "4x10+1x6",
    "price": 54.41
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 433.39
   },
   {
    "model": "YJV",
    "spec": "4x120+1x70",
    "price": 509.99
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 543.7
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 610.36
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 82.09
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 671.91
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 776.21
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 11.96
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 14.81
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 868.71
   },
   {
    "model": "YJV",
    "spec": "4x240+1x120",
    "price": 991.16
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 117.1
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 151.15
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 21.26
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.86
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 183.81
   },
   {
    "model": "YJV",
    "spec": "4x50+1x25",
    "price": 211.28
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 32.65
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 293.14
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 336.72
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 403.43
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 15.92
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 57.73
   },
   {
    "model": "YJV",
    "spec": "5x120",
    "price": 560.2
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 670.57
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 82.42
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 825.08
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 18.95
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1066.65
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 129.47
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 168.41
   },
   {
    "model": "YJV",
    "spec": "5x4",
    "price": 23.37
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 240.45
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 329.96
   },
   {
    "model": "YJV",
    "spec": "5x95",
    "price": 442.49
   },
   {
    "model": "YJV22",
    "spec": "1x10+1x10",
    "price": 92.76
   },
   {
    "model": "YJV22",
    "spec": "3x10",
    "price": 37.45
   },
   {
    "model": "YJV22",
    "spec": "3x120",
    "price": 368.42
   },
   {
    "model": "YJV22",
    "spec": "3x150",
    "price": 447.68
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 581.83
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 81.76
   },
   {
    "model": "YJV22",
    "spec": "3x185",
    "price": 576.37
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 24.41
   },
   {
    "model": "YJV22",
    "spec": "3x240",
    "price": 830.97
   },
   {
    "model": "YJV22",
    "spec": "3x25+2x16",
    "price": 116.9
   },
   {
    "model": "YJV22",
    "spec": "3x300",
    "price": 1016.1
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 153.52
   },
   {
    "model": "YJV22",
    "spec": "3x4+2x2.5",
    "price": 28.13
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 158.96
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 208.54
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 27.34
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 40.96
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 293.34
   },
   {
    "model": "YJV22",
    "spec": "3x95",
    "price": 337.77
   },
   {
    "model": "YJV22",
    "spec": "4x1.5",
    "price": 13.24
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 60.37
   },
   {
    "model": "YJV22",
    "spec": "4x120",
    "price": 454.28
   },
   {
    "model": "YJV22",
    "spec": "4x120+1x70",
    "price": 538.67
   },
   {
    "model": "YJV22",
    "spec": "4x150",
    "price": 558.41
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 77.69
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 734.62
   },
   {
    "model": "YJV22",
    "spec": "4x185+1x95",
    "price": 840.12
   },
   {
    "model": "YJV22",
    "spec": "4x2.5+1x1.5",
    "price": 23.8
   },
   {
    "model": "YJV22",
    "spec": "4x240",
    "price": 930.02
   },
   {
    "model": "YJV22",
    "spec": "4x240+1x120",
    "price": 1100.58
   },
   {
    "model": "YJV22",
    "spec": "4x35",
    "price": 171.81
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 28.78
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 184.29
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 28.02
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 286.61
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 375.34
   },
   {
    "model": "YJV22",
    "spec": "4x95+1x50",
    "price": 442.22
   },
   {
    "model": "YJV22",
    "spec": "5x1.5",
    "price": 16.65
   },
   {
    "model": "YJV22",
    "spec": "5x10",
    "price": 65.25
   },
   {
    "model": "YJV22",
    "spec": "5x16",
    "price": 98.24
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 141.11
   },
   {
    "model": "YJV22",
    "spec": "5x4",
    "price": 29.18
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 281.99
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 41.33
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 369.71
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 474.78
   }
  ],
  "count": {
   "items": 74,
   "cable": 109,
   "est": 7
  }
 },
 {
  "period": "2026-1",
  "label": "2026年第1期（1月）",
  "castWater": {
   "100": 92.92,
   "150": 114.73,
   "200": 153.22,
   "250": 198.51,
   "300": 295.58,
   "400": 361.54,
   "500": 507.68
  },
  "castDrain": {
   "100": 13.12,
   "150": 21.11,
   "75": 11.39
  },
  "weld": {},
  "ppr": {
   "110": 171.99,
   "25": 8.96,
   "32": 13.63,
   "40": 21.64,
   "50": 34.95,
   "63": 55.43,
   "75": 79.08,
   "90": 114.15
  },
  "pe": {
   "110": 102.3,
   "20": 4.33,
   "25": 5.94,
   "32": 9.11,
   "40": 14.12,
   "50": 21.97,
   "63": 33.83,
   "75": 46.3,
   "90": 71.35
  },
  "pvcDrain": {
   "100": 22.58,
   "150": 45.94,
   "50": 8.14,
   "75": 16.3
  },
  "composite": {},
  "bridge": {
   "100x100": 51.15,
   "100x50": 39.46,
   "100x75": 46.14,
   "150x100": 64.43,
   "200x100": 77.47,
   "200x150": 108.69,
   "300x100": 134.25,
   "300x150": 151.4,
   "400x100": 158.65,
   "400x150": 200.58,
   "400x200": 226.39,
   "500x100": 236.94,
   "500x200": 249.63,
   "600x100": 270.46,
   "800x200": 332.26
  },
  "wire": {
   "BVR|1x0.75": 0.87,
   "BVR|1x1.5": 1.73,
   "BVR|1x2.5": 2.7,
   "BVR|1x35": 33.52,
   "BVR|1x4": 4.09,
   "BVR|1x6": 6.06,
   "BVV|3x2.5": 8.65,
   "BVV|3x4": 11.33,
   "BV|1x1.5": 1.49,
   "BV|1x120": 106.98,
   "BV|1x150": 132.19,
   "BV|1x16": 14.48,
   "BV|1x35": 29.16,
   "BV|1x6": 5.28,
   "BV|1x70": 65.23,
   "RVS|1x2": 2.5,
   "RVS|2x0.3": 0.96,
   "RVS|2x0.4": 1.14,
   "RVS|2x0.5": 1.4,
   "RVS|2x0.7": 1.77,
   "RVS|2x1.5": 3.54
  },
  "valve": {
   "gate": {
    "20": 28.46,
    "25": 37.36,
    "32": 51.12,
    "50": 104.58
   },
   "butterfly": {
    "100": 317.83,
    "125": 248.16,
    "150": 442.42,
    "250": 910.5,
    "350": 912.83,
    "450": 3480.93,
    "500": 4224.67,
    "65": 133.33,
    "80": 157.32
   },
   "balance": {
    "100": 972.42,
    "125": 1139.91,
    "20": 123.6,
    "200": 2376.98,
    "32": 246.64,
    "50": 416.33,
    "65": 493.65,
    "80": 675.65
   },
   "strainer": {
    "100": 315.31,
    "125": 437.42,
    "15": 27.91,
    "150": 684.29,
    "20": 31.12,
    "200": 1345.72,
    "25": 40.99,
    "250": 1903.44,
    "300": 2659.78,
    "32": 75.46,
    "40": 104.64,
    "50": 126.0,
    "65": 165.24,
    "80": 228.42
   }
  },
  "cable": [
   {
    "model": "YJV",
    "spec": "3x10",
    "price": 33.81
   },
   {
    "model": "YJV",
    "spec": "3x10+2x6",
    "price": 50.69
   },
   {
    "model": "YJV",
    "spec": "3x120",
    "price": 330.41
   },
   {
    "model": "YJV",
    "spec": "3x120+2x70",
    "price": 449.85
   },
   {
    "model": "YJV",
    "spec": "3x150+2x70",
    "price": 519.71
   },
   {
    "model": "YJV",
    "spec": "3x16",
    "price": 52.83
   },
   {
    "model": "YJV",
    "spec": "3x16+2x10",
    "price": 75.41
   },
   {
    "model": "YJV",
    "spec": "3x185",
    "price": 507.19
   },
   {
    "model": "YJV",
    "spec": "3x185+2x95",
    "price": 638.67
   },
   {
    "model": "YJV",
    "spec": "3x240",
    "price": 664.66
   },
   {
    "model": "YJV",
    "spec": "3x240+2x120",
    "price": 872.97
   },
   {
    "model": "YJV",
    "spec": "3x25+2x16",
    "price": 109.82
   },
   {
    "model": "YJV",
    "spec": "3x35",
    "price": 104.51
   },
   {
    "model": "YJV",
    "spec": "3x35+2x16",
    "price": 139.48
   },
   {
    "model": "YJV",
    "spec": "3x4+2x2.5",
    "price": 20.95
   },
   {
    "model": "YJV",
    "spec": "3x50+2x25",
    "price": 177.58
   },
   {
    "model": "YJV",
    "spec": "3x6",
    "price": 23.01
   },
   {
    "model": "YJV",
    "spec": "3x6+2x4",
    "price": 31.44
   },
   {
    "model": "YJV",
    "spec": "3x70",
    "price": 190.62
   },
   {
    "model": "YJV",
    "spec": "3x70+2x35",
    "price": 248.59
   },
   {
    "model": "YJV",
    "spec": "3x95+2x50",
    "price": 354.75
   },
   {
    "model": "YJV",
    "spec": "4x1.5",
    "price": 10.13
   },
   {
    "model": "YJV",
    "spec": "4x10",
    "price": 39.05
   },
   {
    "model": "YJV",
    "spec": "4x120",
    "price": 424.18
   },
   {
    "model": "YJV",
    "spec": "4x150",
    "price": 532.24
   },
   {
    "model": "YJV",
    "spec": "4x150+1x70",
    "price": 598.05
   },
   {
    "model": "YJV",
    "spec": "4x16",
    "price": 65.14
   },
   {
    "model": "YJV",
    "spec": "4x16+1x10",
    "price": 80.36
   },
   {
    "model": "YJV",
    "spec": "4x185",
    "price": 657.54
   },
   {
    "model": "YJV",
    "spec": "4x185+1x95",
    "price": 760.97
   },
   {
    "model": "YJV",
    "spec": "4x2.5",
    "price": 11.96
   },
   {
    "model": "YJV",
    "spec": "4x2.5+1x1.5",
    "price": 14.49
   },
   {
    "model": "YJV",
    "spec": "4x240",
    "price": 869.41
   },
   {
    "model": "YJV",
    "spec": "4x25",
    "price": 98.16
   },
   {
    "model": "YJV",
    "spec": "4x25+1x16",
    "price": 114.69
   },
   {
    "model": "YJV",
    "spec": "4x35",
    "price": 127.84
   },
   {
    "model": "YJV",
    "spec": "4x35+1x16",
    "price": 147.96
   },
   {
    "model": "YJV",
    "spec": "4x4",
    "price": 20.78
   },
   {
    "model": "YJV",
    "spec": "4x4+1x2.5",
    "price": 24.32
   },
   {
    "model": "YJV",
    "spec": "4x50",
    "price": 179.81
   },
   {
    "model": "YJV",
    "spec": "4x6",
    "price": 29.58
   },
   {
    "model": "YJV",
    "spec": "4x6+1x4",
    "price": 31.96
   },
   {
    "model": "YJV",
    "spec": "4x70",
    "price": 252.86
   },
   {
    "model": "YJV",
    "spec": "4x70+1x35",
    "price": 286.81
   },
   {
    "model": "YJV",
    "spec": "4x95",
    "price": 329.61
   },
   {
    "model": "YJV",
    "spec": "4x95+1x50",
    "price": 394.83
   },
   {
    "model": "YJV",
    "spec": "5x1.5",
    "price": 15.57
   },
   {
    "model": "YJV",
    "spec": "5x10",
    "price": 56.51
   },
   {
    "model": "YJV",
    "spec": "5x150",
    "price": 656.48
   },
   {
    "model": "YJV",
    "spec": "5x16",
    "price": 80.68
   },
   {
    "model": "YJV",
    "spec": "5x185",
    "price": 807.35
   },
   {
    "model": "YJV",
    "spec": "5x2.5",
    "price": 18.55
   },
   {
    "model": "YJV",
    "spec": "5x240",
    "price": 1043.29
   },
   {
    "model": "YJV",
    "spec": "5x25",
    "price": 126.69
   },
   {
    "model": "YJV",
    "spec": "5x35",
    "price": 164.85
   },
   {
    "model": "YJV",
    "spec": "5x50",
    "price": 235.3
   },
   {
    "model": "YJV",
    "spec": "5x70",
    "price": 322.93
   },
   {
    "model": "YJV22",
    "spec": "1x70+1x70",
    "price": 527.7
   },
   {
    "model": "YJV22",
    "spec": "3x10+2x6",
    "price": 56.97
   },
   {
    "model": "YJV22",
    "spec": "3x120+2x70",
    "price": 478.53
   },
   {
    "model": "YJV22",
    "spec": "3x150+2x70",
    "price": 569.46
   },
   {
    "model": "YJV22",
    "spec": "3x16",
    "price": 60.58
   },
   {
    "model": "YJV22",
    "spec": "3x16+2x10",
    "price": 80.06
   },
   {
    "model": "YJV22",
    "spec": "3x185+2x95",
    "price": 731.48
   },
   {
    "model": "YJV22",
    "spec": "3x2+2x16",
    "price": 114.46
   },
   {
    "model": "YJV22",
    "spec": "3x2.5+2x1.5",
    "price": 23.84
   },
   {
    "model": "YJV22",
    "spec": "3x25",
    "price": 85.89
   },
   {
    "model": "YJV22",
    "spec": "3x300+2x150",
    "price": 1173.07
   },
   {
    "model": "YJV22",
    "spec": "3x35+2x16",
    "price": 150.37
   },
   {
    "model": "YJV22",
    "spec": "3x4",
    "price": 19.18
   },
   {
    "model": "YJV22",
    "spec": "3x50",
    "price": 155.62
   },
   {
    "model": "YJV22",
    "spec": "3x50+2x25",
    "price": 204.22
   },
   {
    "model": "YJV22",
    "spec": "3x6",
    "price": 26.78
   },
   {
    "model": "YJV22",
    "spec": "3x6+2x4",
    "price": 40.01
   },
   {
    "model": "YJV22",
    "spec": "3x70",
    "price": 223.68
   },
   {
    "model": "YJV22",
    "spec": "3x70+2x35",
    "price": 287.26
   },
   {
    "model": "YJV22",
    "spec": "3x95",
    "price": 292.69
   },
   {
    "model": "YJV22",
    "spec": "4x10",
    "price": 48.05
   },
   {
    "model": "YJV22",
    "spec": "4x10+1x6",
    "price": 59.11
   },
   {
    "model": "YJV22",
    "spec": "4x16",
    "price": 76.1
   },
   {
    "model": "YJV22",
    "spec": "4x16+1x10",
    "price": 90.84
   },
   {
    "model": "YJV22",
    "spec": "4x185",
    "price": 822.44
   },
   {
    "model": "YJV22",
    "spec": "4x2.5",
    "price": 16.67
   },
   {
    "model": "YJV22",
    "spec": "4x25",
    "price": 112.67
   },
   {
    "model": "YJV22",
    "spec": "4x25+1x16",
    "price": 125.27
   },
   {
    "model": "YJV22",
    "spec": "4x35+1x16",
    "price": 168.22
   },
   {
    "model": "YJV22",
    "spec": "4x4",
    "price": 23.53
   },
   {
    "model": "YJV22",
    "spec": "4x4+1x2.5",
    "price": 28.18
   },
   {
    "model": "YJV22",
    "spec": "4x50",
    "price": 201.12
   },
   {
    "model": "YJV22",
    "spec": "4x6",
    "price": 40.12
   },
   {
    "model": "YJV22",
    "spec": "4x70",
    "price": 303.1
   },
   {
    "model": "YJV22",
    "spec": "4x95",
    "price": 367.62
   },
   {
    "model": "YJV22",
    "spec": "5x120",
    "price": 583.46
   },
   {
    "model": "YJV22",
    "spec": "5x150",
    "price": 710.96
   },
   {
    "model": "YJV22",
    "spec": "5x2.5",
    "price": 21.5
   },
   {
    "model": "YJV22",
    "spec": "5x240",
    "price": 1134.67
   },
   {
    "model": "YJV22",
    "spec": "5x25",
    "price": 138.18
   },
   {
    "model": "YJV22",
    "spec": "5x35",
    "price": 184.77
   },
   {
    "model": "YJV22",
    "spec": "5x50",
    "price": 276.32
   },
   {
    "model": "YJV22",
    "spec": "5x6",
    "price": 40.49
   },
   {
    "model": "YJV22",
    "spec": "5x70",
    "price": 361.91
   },
   {
    "model": "YJV22",
    "spec": "5x95",
    "price": 464.77
   }
  ],
  "count": {
   "items": 68,
   "cable": 102,
   "est": 2
  }
 }
];
