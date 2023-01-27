    // let isShowingSidebar = false
    const showSidebarButton = $("#show-sidebar");
    const closeSidebarButton = $("#close-sidebar");
    const sidebar = $('nav.sidebar');
    const sidebarOverlay = $('#sidebar-overlay');

    showSidebarButton.on('click', function() {
        sidebarOverlay.css({
            width: '100%'
        })
        sidebar.css({
            width: '250px'
        })
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    });
    closeSidebar = function() {
        sidebarOverlay.css({
            width: '0'
        })
        sidebar.css({
            width: '0'
        })
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });

    };
    sidebarOverlay.on('click', closeSidebar);
    closeSidebarButton.on('click', closeSidebar);