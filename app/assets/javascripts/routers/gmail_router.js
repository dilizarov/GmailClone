Gmail.Routers.GmailRouter = Backbone.Router.extend({
  
  initialize: function($rootEl, emailData) {
    this.$rootEl = $rootEl;
    this.emailData = emailData;
    this.emailData.each ( function (email) {
      
    })
  },
  
  routes: {
    "" : "index",
    "emails/:id" : "show"
  },
  
  index: function() { 
  
    var that = this;
    var gmailIndexView = new Gmail.Views.GmailIndexView({
      collection: that.emailData
    });
  
    that.$rootEl.html(gmailIndexView.render().$el);
  },
  
  show: function(id) {
    
    var that = this;
    var email = this.emailData.get(id);
    
    var gmailShowView = new Gmail.Views.GmailShowView({
      model: email
    });
    
    that.$rootEl.html(gmailShowView.render().$el);
  }
});