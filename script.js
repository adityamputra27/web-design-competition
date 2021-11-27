$(function () {
    // navbar smooth scroll
    $('.nav-animate').on('click', function (e) {
        let href = $(this).attr('href')
        let hrefElement = $(href)
        // set animation
        if (hrefElement.length) {
            $('html, body').animate({
                scrollTop: hrefElement.offset().top - 10
            }, 2000, 'easeInOutQuint')
        }
        $(this).parent().parent().parent().removeClass('show')
        e.preventDefault()
    })
    // end
    // add nav active
    $('.nav-border').on('click', function () {
        $('.nav-border').removeClass('active')
        $(this).addClass('active')
    })
    // end
    // collapse rotation icon
    $('.btn-collapse').on('click', function () {
        $(this).find('.fas').toggleClass('fa-rotate')
        // $(this).find('.fas').addClass('fa-rotate')
    })
    // end
    // config skeleton
    const $skeleton = document.querySelectorAll('.skeleton')
    const $skeletonText = document.querySelectorAll('.skeleton-text')
    setTimeout(() => {
        $skeleton.forEach(skel => {
            skel.classList.remove('skeleton')
        })
        $skeletonText.forEach(skelT => {
            skelT.classList.remove('skeleton-text')
            console.log(skelT)
        })
    }, 3000);
    // })
})
// end