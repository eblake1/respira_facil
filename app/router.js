import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('symptoms');
  this.route('about');
  this.route('contact');
  this.route('phinfo');
  this.route('age');
  this.route('patient');
});

export default Router;
