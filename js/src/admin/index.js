import app from 'flarum/app';

app.initializers.add('serakoi/flarumstaffbadge', () => {
    app.extensionData.for('serakoi-flarumstaffbadge')
      .registerSetting({
        setting: 'serakoi-flarumstaffbadge.staffBadge',
        name: 'staffBadge',
        type: 'text',
        label: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadge.label'),
        help: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadge.help'),
      })    
      .registerSetting({
        setting: 'serakoi-flarumstaffbadge.staffBadgeHex',
        name: 'staffBadgeHex',
        type: 'text',
        label: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeHex.label'),
        help: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeHex.help'),
      });
});

