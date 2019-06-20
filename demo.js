// Daterangepicker
    $(function(){$('#filterdaterange').daterangepicker({
        autoUpdateInput: false,
        maxDate: moment(),
            locale :{
                format: 'DD-MM-YYYY',
                separator: ' al ',
                applyLabel: 'Aplicar',
                cancelLabel: 'Cancelar',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                weekLabel: 'W',
                firstDay: 1
            },
            opens: 'center',
            ranges: {
                    'Today'         : [moment(), moment()],
                    'Yesterday'     : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days'   : [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days'  : [moment().subtract(29, 'days'), moment()],
                    'This Month'    : [moment().startOf('month'), moment().endOf('month')],
                    'Last Month'    : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
        }, function(start, end, label) {

            maxDateFilter = moment(end, 'DD-MM-YYYY').unix();
            minDateFilter = moment(start, 'DD-MM-YYYY').unix();

            table.draw();
        });
    });
