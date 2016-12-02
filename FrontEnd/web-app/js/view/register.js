define([
    'jquery',
    'underscore',
    'backbone',
    '../../template/page/register.html',
    '../../template/section/register.html',
], function ($, _, Backbone, RegisterPageTemplate, RegisterSectionTemplate) {
    var body         = $('body'),
        registerView = Backbone.View.extend({
            className : 'registerView',
            template  : {
                page   : _.template(RegisterPageTemplate),
                section: _.template(RegisterSectionTemplate)
            },
            initialize: function () {
                this.render();
                $(window).on("resize", this.updateCSS);
            },
            render    : function () {
                var _this = this;
                body.removeClass().addClass('register');
                this.$el.html(this.template.page);
                this.$el.append(this.template.section).promise().done(function () {
                    _this.updateCSS();
                });
                return this;
            },
            updateCSS : function () {
                if (window.innerHeight < 500) {
                    $('.loginSection', this.$el).removeClass('largeHeight').addClass('smallHeight');
                }
                else {
                    $('.loginSection', this.$el).removeClass('smallHeight').addClass('largeHeight');
                }
            }
        });
    return registerView;
});