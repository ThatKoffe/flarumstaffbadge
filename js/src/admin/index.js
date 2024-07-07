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
        setting: 'serakoi-flarumstaffbadge.staffBadgeTextColor',
        name: 'staffBadgeTextColor',
        type: 'text',
        label: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeTextColor.label'),
        help: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeTextColor.help'),
      })
      .registerSetting({
        setting: 'serakoi-flarumstaffbadge.staffBadgeTextBg',
        name: 'staffBadgeTextBg',
        type: 'text',
        label: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeTextBg.label'),
        help: app.translator.trans('serakoi-flarumstaffbadge.admin.staffBadgeTextBg.help'),
      })
      .registerPermission(
        {
          icon: 'fas fa-id-card-clip',
          label: app.translator.trans('serakoi-flarumstaffbadge.admin.permissions.canEditStaffBadge.label'),
          permission: 'serakoi-flarumstaffbadge.canEditStaffBadge',
        },
        'moderate'
      )
      .registerPermission(
        {
          icon: 'fas fa-id-card-clip',
          label: app.translator.trans('serakoi-flarumstaffbadge.admin.permissions.canEditTagList.label'),
          permission: 'serakoi-flarumstaffbadge.canEditTagList',
        },
        'moderate',
      );
});

