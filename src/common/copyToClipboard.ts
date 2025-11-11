import { showAlert } from '@/common/showAlert';

async function copyToClipboard(text: string, message?: string, duration?: number) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showAlert(message || 'Скопировано!', 'success', duration);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        textArea.remove();
      
      if (successful) {
          showAlert(message || 'Скопировано!', 'success', duration);
      } else {
          throw new Error('execCommand failed');
      }
    }
  } catch (err) {
      console.error('Copy failed:', err);
      showAlert('Ошибка при копировании!', 'error', duration);
  }
}

export default copyToClipboard;

