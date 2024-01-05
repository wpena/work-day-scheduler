// Functions are only called once all DOM elements are ready to be used
$(function() {
    // Displays the current date
    const todayDate = dayjs().format('dddd, MMMM DD YYYY [ | Time: ] h:mm:ssa')
    $('#currentDay').text(todayDate);
});