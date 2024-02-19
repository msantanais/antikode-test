const useGeneral = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return today.getDate();
  };
  const currentYear: number = new Date().getFullYear();
  const generateDate = ({ style = 'eu' }: GenerateDateType) => {
    const daysOfWeek = [
      { key: 'mon', label: 'Monday' },
      { key: 'tue', label: 'Tuesday' },
      { key: 'wed', label: 'Wednesday' },
      { key: 'thu', label: 'Thursday' },
      { key: 'fri', label: 'Friday' },
      { key: 'sat', label: 'Saturday' },
      { key: 'sun', label: 'Sunday' },
    ];
    switch (style) {
      case 'eu':
        return daysOfWeek;
      case 'us':
        return [
          ...daysOfWeek.filter((day) => day.key === 'sun'),
          ...daysOfWeek.filter((day) => day.key !== 'sun'),
        ];
      default:
        break;
    }
  };

  const generatePastelColor = () => {
    const min = 100; // Minimum value for pastel colors
    const max = 255; // Maximum value for pastel colors
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return '#' + hex.padStart(6, '0');
  };

  const generateRandomId = (length: number) => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const inputWithPattern = (pattern: string, value: string) => {
    const trueValue: Array<string> = [];
    let index = 0;
    value.split('').forEach((letter) => {
      if (pattern[index] !== 'x') {
        trueValue.push(pattern[index]);
        trueValue.push(letter);
        index++;
      } else {
        trueValue.push(letter);
      }
      index++;
    });
    return trueValue.join('');
  };

  const noSpace = (value: string | undefined) => {
    if (value) {
      return value.replace(/\s+/g, '');
    }
    return '';
  };

  return {
    currentYear,
    getCurrentDate,
    generateDate,
    generatePastelColor,
    generateRandomId,
    inputWithPattern,
    noSpace,
  };
};

export default useGeneral;
