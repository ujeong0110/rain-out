const SERVICE_KEY =
  process.env.WEATHER_API_KEY;

const stadiumGrid = {
  "잠실야구장": { nx: 61, ny: 126 },
  "사직야구장": { nx: 98, ny: 76 },
  "대구 삼성 라이온즈 파크": { nx: 89, ny: 90 },
  "광주 기아 챔피언스 필드": { nx: 58, ny: 74 },
  "인천 SSG 랜더스필드": { nx: 55, ny: 124 },
  "수원 KT 위즈 파크": { nx: 60, ny: 121 },
  "대전 한화생명 볼파크": { nx: 67, ny: 100 },
  "창원 NC 파크": { nx: 91, ny: 77 },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const stadium = searchParams.get("stadium");

  const grid =
    stadiumGrid[
      stadium as keyof typeof stadiumGrid
    ];

    const nx = grid?.nx;
const ny = grid?.ny;

const now = new Date();

const baseDate =
  now.toISOString().slice(0, 10).replace(/-/g, "");

const hour = now.getHours();

let baseTime = "0200";

if (hour >= 23) {
  baseTime = "2300";
} else if (hour >= 20) {
  baseTime = "2000";
} else if (hour >= 17) {
  baseTime = "1700";
} else if (hour >= 14) {
  baseTime = "1400";
} else if (hour >= 11) {
  baseTime = "1100";
} else if (hour >= 8) {
  baseTime = "0800";
} else if (hour >= 5) {
  baseTime = "0500";
} else {
  baseTime = "0200";
}

const url =
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst` +
  `?serviceKey=${SERVICE_KEY}` +
  `&pageNo=1` +
  `&numOfRows=1000` +
  `&dataType=JSON` +
  `&base_date=${baseDate}` +
  `&base_time=${baseTime}` +
  `&nx=${nx}` +
  `&ny=${ny}`;

  const response = await fetch(url);

const data = await response.json();

const items =
  data.response.body.items.item;

const currentHour = new Date().getHours();

 const popItems = items.filter(
  (item: any) => item.category === "POP"
);

const pcpItems = items.filter(
  (item: any) => item.category === "PCP"
);

const popItem =
  popItems.find(
    (item: any) =>
      Number(item.fcstTime.slice(0, 2)) >= currentHour
  ) || popItems[0];

const pcpItem =
  pcpItems.find(
    (item: any) =>
      Number(item.fcstTime.slice(0, 2)) >= currentHour
  ) || pcpItems[0];

console.log(
  items.filter((item: any) => item.category === "POP")
);

console.log(
  "선택된 예보시간:",
  popItem?.fcstTime,
  popItem?.fcstValue
);

return Response.json({
  stadium,
  rainChance: popItem?.fcstValue,
  rainAmount: pcpItem?.fcstValue,
});
}