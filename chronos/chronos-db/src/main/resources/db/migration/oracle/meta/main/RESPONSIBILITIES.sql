insert into responsibilities (id, dept_id, internal_role_cd) values (0, 0, 'ADMIN');

insert into responsibilities (id, resp_type, screens, dept_id, internal_role_cd) VALUES (nextval('RESPONSIBILITY_ID'), 'SCREEN', to_clob(
    '[{
      "id": "id12",
      "name": "admin",
      "text": "Адмнистрирование",
      "url": "/screen/admin",
      "defaultScreen": false
    },' ||
     '{
      "id": "id13",
      "name": "legacy_audit",
      "text": "Legacy Audit",
      "url": "/screen/legacy_audit",
      "defaultScreen": true
    }]'), 0 , 'ADMIN');
