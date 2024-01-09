// Functions are only called once all DOM elements are ready to be used
$(function () {
    // Displays the current date and time
    const todayDate = dayjs().format('dddd, MMMM DD YYYY [ | Time: ] h:mma')
    $('#currentDay').text(todayDate);

    // Checks and updates time block colors
    function updateTimeBlock() {

        let currentHour = dayjs().hour();

        $('.time-block').each(function () {
            // Splits to get id
            let hourBlock = parseInt($(this).attr('id').split('-')[1]);

            // Compares the hour id to the current time
            if (hourBlock < currentHour) {
                $(this).addClass('past');
            } else if (hourBlock === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past present');
                $(this).addClass('future');
            }
        });
    }

    updateTimeBlock();
});