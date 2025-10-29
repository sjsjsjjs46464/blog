export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatDateZh(dateString: string): string {
  const parts = dateString.split('-').map(part => parseInt(part, 10));
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  return `${year}年${month}月${day}日`;
}