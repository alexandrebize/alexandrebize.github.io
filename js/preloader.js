$(window).load(function(){
            setTimeout(function(){
                $('#preloader').velocity({
                    opacity : 0.1,
                    translateY: "-80px"
                }, {
                    duration: 300,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 6000,
                    complete: function(){
                        $('.home').addClass('animate-border divide');
                    }
                })  
                    }
                })
            },0)
        })