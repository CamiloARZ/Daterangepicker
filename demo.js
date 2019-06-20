//Filstro de datatable
$.fn.dataTableExt.afnFiltering.push(
  function(oSettings, aData, iDataIndex){
      
      // Filtro del Select
      var SelectFilter 	= $( "#Select").val();
       
      // Corresponde a la columna que filtra el select
      filterColumn   = aData[0];          
        
      if( SelectFilter != undefined ){

          if(SelectFilter != ''){
              if(SelectFilter != filterColumn ){
                  return false;
              }
          }
      }

      if (typeof aData._date == 'undefined'){
          aData._date = aData[1];
      }

      if (minDateFilter && !isNaN(minDateFilter)) {
          if (aData._date < minDateFilter) {              
              return false;
          }
      }

      if (maxDateFilter && !isNaN(maxDateFilter)) {

          if (aData._date > maxDateFilter) {
              return false;
          }
      }

      return true;

  }
);


// Init Inpu #filterdaterange
$(document).ready(function() {
    $("#filterdaterange").val("");
});


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
