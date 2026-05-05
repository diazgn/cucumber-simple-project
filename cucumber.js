export default {
    paths: ['features/**/*.feature'],
    require: ['features/step_definitions/**/*.js'],
    format: [
        '@cucumber/pretty-formatter',
        'html:reports/cucumber-report.html'
    ]
};
