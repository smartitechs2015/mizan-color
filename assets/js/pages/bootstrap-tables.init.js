
function statusFormatter(e, t) {
    var n;
    "Paid" == e ? n = "success": "نعم" == e ? n = "warning": "Shipped" == e ? n = "info": "Refunded" == e && (n = "danger"); t.id; return '<div class="badge label-table bg-' + n + '"> ' + e + "</div>"
}
function operateFormatter(e, t) {
    return [
      '<a class="edit" href="javascript:void(0)" title="تعديل">',
      '<i class="fa fa-edit"></i>',
      '</a>  ',
      '<a class="remove" href="javascript:void(0)" title="حذف">',
      '<i class="fa fa-trash"></i>',
      '</a>'
    ].join('')
  }
$(document).ready(function() { var t = $("#demo-custom-toolbar"), n = $("#demo-delete-row"); 
t.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table", function() { n.prop("disabled", !t.bootstrapTable("getSelections").length) }), n.click(function() { var e = $.map(t.bootstrapTable("getSelections"), function(e) { return e.id }); t.bootstrapTable("remove", { field: "id", values: e }), n.prop("disabled", !0) }) }),
$(window).on("load", function () { $('[data-toggle="table"]').show() }),
window.icons = {
    refresh: "mdi mdi-refresh",
    toggle: "fa-refresh",
    toggleOn: "fa-toggle-on",
    toggleOff: "fa-toggle-on",
    columns: "fas fa-th-list",
    search: "fa-search",

    paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down"
};


