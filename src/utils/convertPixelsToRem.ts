export function convertPixelsToRem(value: number | number[]) {
  const values = [];

  if (Array.isArray(value)) {
    value.map((v) => {
      values.push(String(Number(v) / 16) + "rem");
    });
  } else {
    values.push(String(Number(value) / 16) + "rem");
  }

  return values.toString().replace(/,/g, " ");
}
