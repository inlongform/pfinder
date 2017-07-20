(function($) {
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.DataTable = function(pageData, page) {

        this.body         = $("body");
        this.START_PAGE   = 1;
        this.START_COLUMN = "timeUpdated";
        this.START_BU     = "myforms";
        this.START_ORDER  = "desc";

        this.init(pageData, page);
    };

    IBM.mrs.DataTable.prototype = {
        init: function(pageData, page) {
            var self             = this;
            console.log(pageData)
            this.pageData        = pageData;
            // this.totalEntries = 0;
            this.totalPages      = 0;
            this.userRole        = pageData.filterList[0].role;
            this.currentPage     = this.START_PAGE;
            this.currentOrder    = this.START_ORDER;
            this.currentCol      = this.START_COLUMN;
            this.currentBu       = this.START_BU;
            this.rows            = [];
            
            this.pBtns           = $(".paginate", page);
            var searchField      = $("input#search", page);
            var dt               = $("#dataTable", page);
            this.heads           = $("th", dt);
            this.tbody           = $("tbody", dt);


            this.initFilter(pageData.filterList, page);
            this.loadTableData(this.currentBu, this.userRole, 1);
            this.createHeadBtns();

            this.body.bind(IBM.mrs.CONSTANTS.DELETE_COMPLETE, function(event, result) {
                self.deleteForm(result)
            });

            this.body.bind(IBM.mrs.CONSTANTS.CLOSE_TABLEDETAIL, function(event, result){
                self.closeDetails(result.index);

            })

            $("a.ibm-search-link", page).click(function(event) {
                event.preventDefault();
                searchField.val();
                var searchVal = searchField.val();
                if (searchVal.length > 1) {

                    self.loadTableData(self.currentBu, self.userRole, 1, searchVal);
                } else {
                    self.loadTableData(self.currentBu, self.userRole, 1);
                }
            })

        },

        deleteForm: function(data) {

            $.each(this.rows, function(index, val) {
                var row = $(this)[0];
                if (row.getSource() == data.source) {
                    row.removeRow();

                    return false;
                }
            });
        },

        closeDetails: function(rowIndex){
            $.each(this.rows, function(index, val) {
                if(rowIndex!=index){
                    if(val.getIsOpen()){
                        val.removeDetail();
                    }
                    // console.log(val.getIsOpen())
                }
                
            });
        },


        initFilter: function(filterList, page) {
            var self = this;
            var list = IBM.mrs.Utils.restructureFilterList(filterList);
            $("#filterlist", page).select2({
                data: list,
                openOnEnter: true

            });

            $("#filterlist", page).on("select2:select", function(e) {
                //always get the first page
                var searchItem = IBM.mrs.Utils.createListFormCreds(e.params.data.id, e.params.data.role, 1);
                // self.userRole  = e.params.data.role;
                // self.currentBu = e.params.data.id;

                IBM.mrs.Utils.getData(IBM.mrs.LIST_FORMS_PATH, "POST", JSON.stringify(searchItem), function(data) {
                    // console.log(data)
                    self.setHeadIcons("timeUpdated", true);
                    self.loadTableData(e.params.data.id, e.params.data.role, 1)
                });
            });
        },

        loadTableData: function(bu, role, pageNum, search, orderCol, order) {
            var self = this;
            // console.log("load page", bu, role, pageNum, search, orderCol, order)
            this.currentPage  = pageNum;
            this.currentOrder = order;
            this.currentCol   = orderCol;
            this.userRole     = role;
            this.currentBu    = bu;
            // console.log(this.currentBu, this.userRole, this.currentPage, search, this.currentCol, this.currentOrder)
            var obj           = IBM.mrs.Utils.createListFormCreds(bu, role, this.currentPage, search, orderCol, order);
            console.log(obj)
            IBM.mrs.Utils.getData(IBM.mrs.LIST_FORMS_PATH, "POST", JSON.stringify(obj), function(data) {
                console.log(data)
                var newData = IBM.mrs.Utils.formatFormTable(data);
                newData.pageData = self.pageData;

                // console.log(newData)
                // self.totalEntries = newData.totalAmount;
                self.totalPages = Math.ceil(newData.totalAmount / IBM.mrs.CONSTANTS.DT_PAGE_ROWS);
                self.drawTable(newData, pageNum);

            });
        },

        drawTable: function(data, pageNum) {
            var self = this;
            this.tbody.empty();
            console.log(data)
            var template = IBM.mrs.Utils.createTemplate("tablerow_tmp", data);
            this.rows = [];
            // console.log(data)
            this.tbody.append(template);



            $.each($("tr", this.tbody), function(index, el) {
                var row = new IBM.mrs.TableRow(el, data.forms[index], index, data.pageData);
                self.rows.push(row);

            });




            this.createPageBtns(pageNum);



        },



        createHeadBtns: function() {
            var self = this;

            this.heads.click(function(event) {
                event.preventDefault();

                //classes

                var selected = $(this);
                var sortCol = selected.data("id");
                var order = "";

                //dont sort the ones with no id
                if (!sortCol) {
                    return;
                }
                if (selected.hasClass('sorting_desc') || selected.hasClass('sorting')) {
                    selected.removeClass('sorting_desc').removeClass('sorting').addClass('sorting_asc');
                    order = "asc";
                } else if (selected.hasClass('sorting_asc')) {
                    selected.removeClass('sorting_asc').addClass('sorting_desc');
                    order = "desc";
                }


                self.setHeadIcons(sortCol, false);
                self.loadTableData(self.currentBu, self.userRole, 1, null, sortCol, order)


            })
        },

        setHeadIcons: function(sortCol, isReset) {
            // console.log("sortCol", sortCol)
            $.each(this.heads, function(index, val) {
                var tdId = $(val).data("id");
                if (tdId && tdId != sortCol) {
                    $(val).removeClass('sorting_desc').removeClass('sorting_asc').addClass('sorting');
                }

            });

            if (isReset) {
                $(this.heads[0]).removeClass('sorting_asc').removeClass('sorting').addClass('sorting_desc')
            }
        },

        setPrevNextBtns: function(btns, pageNum, totalPages) {
            var prevBtn = $(".prev", btns);
            var nextBtn = $(".next", btns);
            if(totalPages > 1){
                if(pageNum == 1){

                    prevBtn.css({ "visibility": "hidden" });
                    nextBtn.css({ "visibility": "visible" });
                }else if(pageNum == totalPages){

                    prevBtn.css({ "visibility": "visible" });
                    nextBtn.css({ "visibility": "hidden" });
                }
            }else{

                prevBtn.css({ "visibility": "hidden" });
                nextBtn.css({ "visibility": "hidden" });
            }
        },


        createPageBtns: function(pageNum) {
            var self = this;
            this.pBtns.empty();

            //if there is only 1 page dont show the page buttons
            if (this.totalPages <= 1) {
                return;
            }
            var obj = {
                "totalPages": this.totalPages,
                "currentPage": pageNum
            }
            var template = IBM.mrs.Utils.createTemplate("paginate_tmp", obj);
            this.pBtns.append(template);

            var btns = $("a", this.pBtns);


            btns.click(function(event) {
                event.preventDefault();
                var btnId = $(this).data("id");

                if (btnId == "next") {
                    if (self.currentPage < self.totalPages) {
                        self.loadTableData(self.currentBu, self.userRole, self.currentPage + 1, null, self.currentCol, self.currentOrder);
                    }

                } else if (btnId == "prev") {
                    if (self.currentPage > 1) {
                        self.loadTableData(self.currentBu, self.userRole, self.currentPage - 1, null, self.currentCol, self.currentOrder);
                    } else {
                        prevBtn.css({ "visibility": "hidden" })
                    }
                } else {

                    if (btnId != self.currentPage) {

                        self.loadTableData(self.currentBu, self.userRole, btnId, null, self.currentCol, self.currentOrder);

                    }
                }

            })


            self.setPrevNextBtns(this.pBtns, self.currentPage, self.totalPages);


        }

    };
}(jQuery));
