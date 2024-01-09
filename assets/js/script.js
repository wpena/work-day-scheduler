// Functions are only called once all DOM elements are ready to be used
$(function () {
    // Displays the current date and time
    const todayDate = dayjs().format('dddd, MMMM DD YYYY [ | Time: ] h:mma')
    $('#currentDay').text(todayDate);

    // Checks and updates time block colors
    function updateTimeBlock() {

        const currentHour = dayjs().hour();

        $('.time-block').each(function () {
            // Splits to get id
            const hourBlock = parseInt($(this).attr('id').split('-')[1]);

            // Compares the hour id to the current time
            if (hourBlock < currentHour) {
                $(this).removeClass('present future');
                $(this).addClass('past');
            } else if (hourBlock === currentHour) {
                $(this).removeClass('past future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past present');
                $(this).addClass('future');
            }
        });
    }

    // Calls the functions
    updateTimeBlock();
    saveEvent();

    function saveEvent(){
        // Listens for when save button is clicked
        $('.saveBtn').on('click', function() {
            // Takes the value after the split
            const hour = $(this).parent().attr('id').split('-')[1];
            const description = $(this).siblings('.description').val();

            // Sets and stores hour key and description value in local storage
            localStorage.setItem(hour, description);
        })

    }

});
