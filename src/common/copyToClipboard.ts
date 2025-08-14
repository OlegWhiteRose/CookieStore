import { showAlert } from '@/common/showAlert';

async function copyToClipboard(text: string, message?: string, duration?: number) {
  try {
    await navigator.clipboard.writeText(text);
    showAlert(message || 'Скопировано!', 'success', duration);
  } catch (err) {
    showAlert('Ошибка при копировании!', 'error', duration);
  }
}

export default copyToClipboard;

