/*
jQuery Pop Menu
Version: beta
Author: Volkan. http://vsendag.com
Based on jQuery 1.0.3
*/

(function ($) {

    $.fn.popmenu = function (options) {

        var settings = $.extend({
            closeOnLive: false,
            defaultIconClassName: "fas fa-home fa-lg",
            backIconClassName: "fas fa-chevron-left fa-lg",
            iconClassName: 'fas fa-th fa-lg',
            cancel: null,
            click: null
        }, options);

        var $targetFirst = $(this);
        var $cancelLi = null;
        var $selectedLi = null;

        var returnObj = {
            isActive: false
        };

        var $tar_ctrl = $('<div class="j-menu-ctrl"><i class="' + settings.iconClassName + '"></i></div>').appendTo($targetFirst);

        function addNewItem($ul, opt) {
            var className = opt.className || settings.defaultIconClassName
            var $li = $("<li></li>").appendTo($ul);
            $li.data("options", opt);
            var $a = $('<a href="#"></a>').appendTo($li);
            var $div = $('<div></div>').appendTo($a);
            var $i = $('<i class="' + className + '"></i>').appendTo($div);
            var $text = $('<div>' + opt.text + '</div>').appendTo($div);
            return $li;
        }

        function setElementsFromItems(items, target) {
            var $target = $(target);
            var $ul = $('<ul class="j-menu-body"></ul>').appendTo($target);
            $.each(items, function (i, opt) {
                var $li = addNewItem($ul, opt);

                if ($li && opt.items) {
                    var $subdiv = $('<div class="j-menu-sub-div"></div>').appendTo($li);
                    setElementsFromItems(opt.items, $subdiv);
                }
            })
        }

        function setCloseItem() {
            var $ul = $targetFirst.children("ul.j-menu-body");
            $cancelLi = addNewItem($ul, {
                text: "İptal",
                className: "fas fa-times fa-lg"
            });
            $cancelLi.hide();
        }

        if (options.items && options.items.length > 0) {
            setElementsFromItems(options.items, $targetFirst);
            setCloseItem();
        }

        $tar_ctrl.click(function (e) {
            e.preventDefault();
            $(this).next().toggle();
            if (typeof settings.click == "function") {
                settings.click({}, this);
            }
            if (typeof settings.onOpen == "function") {
                settings.onOpen({}, this);
            }
        });

        function deActivateAllItems(callCancelEvent) {

            if (settings.cancel && callCancelEvent !== false) {
                var isCancelable = settings.cancel();
                if (isCancelable === false)
                    return false;
            }

            $targetFirst.find(".j-menu-item-active").each(function () {
                var optOther = $(this).closest("li").data("options");
                $(this).removeClass("j-menu-item-active");
                $(this).data("isactive", false);

            });

            $cancelLi.hide();
        }

        function setActivateItem($item, active) {
            active = active !== false
            var $parentLi = $item.closest("li");
            var opt = $parentLi.data("options");

            if (active) {
                // secilen dısındakileri deactieve eder.
                var isCancelable = deActivateAllItems();
                if (isCancelable === false)
                    return false;

                $item.addClass("j-menu-item-active");
                $selectedLi = $parentLi;
                $cancelLi.show();
            } else {
                var isCancelable = settings.cancel();

                if (isCancelable === false)
                    return false;

                $selectedLi = null;
                $cancelLi.hide();
                $item.removeClass("j-menu-item-active");
            }
            $item.data("isactive", active);

            return true;
        }
        function setIt(target) {
            var $tar = $(target);
            $tar.data("body", $tar.children('ul'))
            var $tar_body = $tar.children('ul');
            var $tar_list = $tar_body.children('li');
            var $tar_a = $tar_list.children('a');

            $tar.data("body", $tar_body)
            $tar.data("list", $tar_list)
            $tar.data("link", $tar_a)
            $tar.data("ctrl", $tar_ctrl)

            var $tar_sub = $tar_a.next("div");
            $tar_a.each(function () {
                var $sub_a = $(this);
                var $tar_sub = $sub_a.next("div");
                if ($tar_sub.length) {
                    setIt($tar_sub);
                }

                $sub_a.click(function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var $subdiv = $this.next("div")
                    var $parentLi = $this.closest("li");
                    var $item = $this.find("i,svg");
                    var $text = $item.next("div");
                    var opt = $parentLi.data("options");
                    var isActive = $this.data("isactive");

                    if (typeof opt.click == "function") {
                        if ((opt.isIgnoreCancelButton == null) || (opt.isIgnoreCancelButton == false)) {//UB: 20.07.2018 Check item vb.  gibi menu elemanlarında cancel düğmesi -ve aktif/pasif kontrolü- istenmeyebilir. Örnek: Çevrim içi/dışı çalışma seçeneği.
                            $cancelLi.off("click");
                            if (isActive) {
                                
                                deActivateAllItems();
                            } else {
                                var isCancelable = setActivateItem($this, true);

                                if (isCancelable === false)
                                    return false;

                                $cancelLi.one("click", function () {
                                    
                                    deActivateAllItems();
                                })
                            }
                        }

                        opt.click(opt, this);

                    }


                    if ($subdiv.length) {
                        var $childUl = $subdiv.children("ul")
                        var $parentUl = $this.closest("ul");
                        var $othersLi = $parentUl.children("li").not($parentLi).not($cancelLi);
 
                        if (opt.expanded) {

                            var isCancelable = setActivateItem($this, true);
                            if (isCancelable === false)
                                return false;
                           
                            $childUl.hide();
                            $othersLi.show('fast');
                            $item.removeClass(settings.backIconClassName);
                            $item.addClass(opt.className);
                            $text.text(opt.text);
                            deActivateAllItems();

                        } else {
                            $othersLi.hide();
                            $item.addClass(settings.backIconClassName);
                            $item.removeClass(opt.className);
                            $text.text("geri");
                            $childUl.show('fast');
                        }

                        opt.expanded = !opt.expanded;
                    }

                    if (typeof settings.click == "function") {
                        settings.click(opt, this);
                    }

                });
            });
        }

        setIt($targetFirst);

        returnObj.firstElement = $targetFirst;
        returnObj.deActivateAllItems = function (callCancelEvent) {
            deActivateAllItems(callCancelEvent);
        }
        return returnObj;

    };

}(jQuery));
