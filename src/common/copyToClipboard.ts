async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Скопировано в буфер обмена:', text);
  } catch (err) {
    console.error('Ошибка при копировании:', err);
  }
}

export default copyToClipboard;
