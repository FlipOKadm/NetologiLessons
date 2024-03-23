function getDateDiffDays(date) {
  const currentDate = new Date();
  const dateObj = new Date(date);
  const timeDiff = Math.abs(currentDate.getTime() - dateObj.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return dayDiff;
}
function getDateDiffInMinutes(date) {
  const currentDate = new Date();
  const dateObj = new Date(date);
  const timeDiff = Math.abs(currentDate.getTime() - dateObj.getTime());
  const minuteDiff = Math.ceil(timeDiff / (1000 * 60));
  return minuteDiff;
}

function getDateDiffInHours(date) {
  const currentDate = new Date();
  const dateObj = new Date(date);
  const timeDiff = Math.abs(currentDate.getTime() - dateObj.getTime());
  const hourDiff = Math.ceil(timeDiff / (1000 * 60 * 60));
  return hourDiff;
}

export { getDateDiffDays, getDateDiffInMinutes, getDateDiffInHours };