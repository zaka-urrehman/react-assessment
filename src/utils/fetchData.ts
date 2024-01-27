export const getData = async (url: string) => {
    const res = await fetch(url);
  
    try {
      // Clone the response before reading the text
      const response = res.clone();
      const responseText = await res.text();
  
      if (!responseText.trim()) {
        return 'not found';
      }
  
      return response.json();
    } catch (error:any) {
      console.error('Error fetching data:', error.message);
      return 'Unexpected error occurred';
    }
  };
  