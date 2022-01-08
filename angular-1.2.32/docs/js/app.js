


var app = angular.module('MyChildApp', [])
clsColorInk = function() {
    this.scope;
    this.fn;
    this.api;
};
clsColorInk.prototype = {
    initial: function($scope) {
        var _this = this;
        this.scope = $scope;
        _this.fnExtend();
    },
    // showDemo: function(){
    //     console.log('aaa');
    // }
    fnExtend: function(scope, $fn) {
        var _this = this;
        cruds.initial(this.scope)
        _this.fn = $fn;
        cruds.showViews('#tableorders', [1, 7, 6, 5, 4, 2, 3], $(window).height() - 287, function(arg1) {
        })
    }
    
    
}






app.controller('MyChildController1', function ($scope) {
    $scope.name1='letancuong'
    $scope.click=function(){
        $('#tableorders').DataTable().row.add(["2.0","Item 2", "Generic Desc", "2", 200]).draw();
    }
    colorInk.initial($scope);

})


app.controller('MyChildController', function ($scope, $window) {
    $scope.Name = 'profile'
    $scope.click=function(){
        console.log('$scope',$scope)
        $scope.Name++
    };
    $scope.changeTab=function(tab){
        $scope.Name=tab
        colorInk.initial($scope);
    }
    $scope.nameTab=false;
    $scope.shelfProfile=[
        {
            id:1,
            name:'kệ k',
            description:'để đựng đồ ăn',
            customer:'nguyễn văn a',
            
        },
        {
            id:2,
            name:'kệ 2',
            description:'để đựng đồ uống',
            customer:'lê văn b',
            
        },
        {
            id:3,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh c',
            
        },
        {
            id:4,
            name:'kệ 4',
            description:'fffff',
            customer:'abc',
            
        },
        {
            id:5,
            name:'kệ 4',
            description:'fffff',
            customer:'abc',
            
        },
        {
            id:7,
            name:'kệ 4',
            description:'fffff',
            customer:'abc',
            
        },
        {
            id:22,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh c',
            
        },
        {
            id:21,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh c',
            
        },
        {
            id:42,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh c',
            
        },
        {
            id:212,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh c',
            
        },
        {
            id:44,
            name:'kệ 3',
            description:'đồ dùng',
            customer:'lí minh s',
            
        },
        {
            id:5,
            name:'kệ 4',
            description:'fffff',
            customer:'abc',
            
        },
        {
            id:5,
            name:'kệ 4',
            description:'fffff',
            customer:'abc',
            
        },
        
    ]
    // colorInk.scriptLayout(angular.element, ['#viewDonhang', ['.view-donhang', '.view-tu']], ['#viewTu', ['.view-tu', '.view-donhang']]);
});
extendColorInk=function(){

}

extendColorInk.prototype = new clsColorInk();
extendColorInk.prototype.constructor = new extendColorInk();
/*==============================================================*/
var colorInk = new extendColorInk();


clsCruds = function() {
    this.scope;
    this.compile;
    this.store_table = [];
    this.default_var;
    this.suffix_key;
};
clsCruds.prototype = {
    initial: function($scope, $compile) {
        var _this = this;
        this.scope = $scope;
        this.compile = $compile;
    },
    showViews: function($tbl_selector, $col, $scroll_y, $callback, $responsive = true) {
        var _this = this;
        console.log(_this.exitsTables($tbl_selector))
        _this.exitsTables($tbl_selector)[0] ? _this.exitsTables($tbl_selector)[1].destroy() : _this.store_table[$tbl_selector];
        $('.DataTables_sort_icon').remove();
        _this.colPriority($col)
        setTimeout(function() {
            _this.scope.$apply(function() {
                console.log(angular.element(document.querySelector('#tableorders')));
                _this.store_table[$tbl_selector] = $($tbl_selector).DataTable({
                    // columns:5,
                    // "lengthMenu": [1000],
                    // "language": {
                    //     "zeroRecords": textFailData,
                    // },
                    // columns:[{ "bSearchable": false }, //col 1
                    //         { "bSearchable": true },  //col 2
                    //         { "bSearchable": true },  //col 3
                    //         { "bSearchable": true}, //col 4
                    //         { "bSearchable": true }, //col 5
                    //         { "bSearchable": true },
                    //         { "bSearchable": false },
                    //     ], //col 6 
                    scrollX: !$responsive ? true : false,
                    // scrollY: $scroll_y,
                    // responsive: $responsive,
                    // ordering: false,
                    drawCallback: function(settings, json) {
                    //     angular.element($tbl_selector + ' tbody').on('click', 'tr', function() {
                    //         var __this = this;
                    //         var _child = _this.store_table[$tbl_selector].row(__this).child;
                    //         if (_child.isShown()) {
                    //             var _current = angular.element(_this.store_table[$tbl_selector].row(__this).selector.rows);
                    //             var _next = angular.element(_this.store_table[$tbl_selector].row(__this).selector.rows.nextSibling);
                    //             cruds.compileClickResponsiveTable(__this, _current, _next);
                    //         } else {
                    //             //child.show();
                    //         }
                    //     });
                    //     tool_utilities.viewLightBox(angular.element, 'div.srcset', 'css/images/iconpdf.png');
                    //     _this.scope.glinkContainer = false;
                        return $callback(_this.scope);
                    }
                });
            });
        }, 600);
    },
    exitsTables: function($tbl_selector) {
        var _this = this;
        console.log(_this.store_table)
        // console.log(angular.element(#viewDonhang));
        if (_this.store_table[$tbl_selector]) {
            return [true, _this.store_table[$tbl_selector]];
        }
        return [false];
    },
    colPriority: function($col) {
        var _this = this;
        
        var _array = new Array();
        _.each($col, function($item, $index) {
            _array.push({
                responsivePriority: $item
            })
            console.log('_array',_array);
        });
        return _array;
        
        
    },
}
var cruds = new clsCruds();


app.controller('MyChildController2', function ($scope,$window) {
    $scope.name=['fff','faaa','aeaa']
    
})


app.controller('controllerForm', function ($scope,$window) {
    $scope.name=['fff','faaa','aeaa']
    $scope.editVehiclesData="1"
    $scope.name1="<p>helooooooo</p>"
    
})