const formatDateToMonthNameAndYear = (dateString) => {
    if (dateString) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dateStringArray = dateString.split("-");
        let year = dateStringArray[0];
        let month = dateStringArray[1].replace(/^0+/, '');
        let monthName = months[month-1];
        return `${monthName}, ${year}`
    }
    return null;
}

const filterPageContentByPageTitle = (pageContent, pageTitle) => {
    if (pageContent && pageTitle) {
      return pageContent.filter(item => {
        return item.fields.title === pageTitle;
      });
    } 
    return null;
  }

export { formatDateToMonthNameAndYear, filterPageContentByPageTitle };