Gmail.Routers.GmailRouter = Backbone.Router.extend({
  
  initialize: function($rootEl, emailData) {
    this.$rootEl = $rootEl;
    this.emailData = emailData;
  },
  
  routes: {
    "" : "index"
  },
  
  index: function() { 
  
    var that = this;
  
    var gmailIndexView = new Gmail.Views.GmailIndexView();
  
    that.$rootEl.html(gmailIndexView.render().$el)}
})