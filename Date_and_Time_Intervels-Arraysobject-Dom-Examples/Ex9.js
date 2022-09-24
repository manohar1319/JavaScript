var birthdayWishes=[
    {
        title:`Wish you a many many happy returns of the day. May God bless you with health, wealth and prosperity in your life. HAPPY BIRTHDAY
        `
    },

    {
        title:`On your birthday I wish you success and endless happiness!.Wishing you an awesome birthday!`
    },

    {
        title:`Happy birthday to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.`
    },

    {
        title:`Wish you a beautiful birthday and I hope you get double of everything you want in your life. Happy Birthday!`
    },

    {
        title:`May your birthday and your life be as wonderful as you are .  Happy Birthday`
    },

    {
        title:`Happy Birthday Dear Sister You Are Amazing You Are Special You Are Unique You Are Kind You Are Precious You Are Loved.`
    },

    {
        title:`My dear friend, may your special day be full of beautiful, magical and unforgettable moments!`
    },

    {
        title:`Wish a fabulous birthday to my cutest baby`
    },

    {
        title:`Happy Birthday you are a beautiful person, inside and out .I hope that you remember that,today and always.`
    }


]


//sms

function myfun(request) 
        {
            //Target input_by_Id_Reference----
            var textarea_dom=document.getElementById('sourcecode')

            textarea_dom.value=request//li_textdata assigned to textarea

            //Target output_by_Id_Reference----
            var output_dom=document.getElementById('code_result')

          //update textarea_input_As_Response to output_tag
            output_dom.innerText=140-textarea_dom.value.length
        
        }