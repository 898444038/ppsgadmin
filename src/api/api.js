const API = {
  login: {},
  config:{
    country:{
      select:'/ppsg-admin/ppsg/config/country/select',
      insert:'/ppsg-admin/ppsg/config/country/insert',
      update:'/ppsg-admin/ppsg/config/country/update',
      delete:'/ppsg-admin/ppsg/config/country/delete',
    },
    star:{
      select:'/ppsg-admin/ppsg/config/star/select',
      insert:'/ppsg-admin/ppsg/config/star/insert',
      update:'/ppsg-admin/ppsg/config/star/update',
      delete:'/ppsg-admin/ppsg/config/star/delete',
    },
    combat:{
      select:'/ppsg-admin/ppsg/config/combat/select',
      insert:'/ppsg-admin/ppsg/config/combat/insert',
      update:'/ppsg-admin/ppsg/config/combat/update',
      delete:'/ppsg-admin/ppsg/config/combat/delete',
    },
    generalsType:{
      select:'/ppsg-admin/ppsg/config/generals/type/select',
      insert:'/ppsg-admin/ppsg/config/generals/type/insert',
      update:'/ppsg-admin/ppsg/config/generals/type/update',
      delete:'/ppsg-admin/ppsg/config/generals/type/delete',
    },
    science:{
      select:'/ppsg-admin/ppsg/config/science/select',
      insert:'/ppsg-admin/ppsg/config/science/insert',
      update:'/ppsg-admin/ppsg/config/science/update',
      delete:'/ppsg-admin/ppsg/config/science/delete',
    },
    dict:{
      select:'/ppsg-admin/ppsg/config/dict/select',
      insert:'/ppsg-admin/ppsg/config/dict/insert',
      update:'/ppsg-admin/ppsg/config/dict/update',
      delete:'/ppsg-admin/ppsg/config/dict/delete',
    }
  },
  xzl:{
    select:'/ppsg-admin/ppsg/xzl/custom/exportExcel'
  }
}

export default API
