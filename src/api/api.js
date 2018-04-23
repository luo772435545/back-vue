export default {
  signUp: '/account/signUp', // 注册
  signIn: '/account/signIn', // 登录
  logout: '/account/logout', // 登出
  refresh_token: '/account/', // 刷新Token
  countryList: '/dropship/common/countryList', // 国家列表
  storeList: '/shopify/store/list', // 店铺管理模块--店铺列表
  removeStore: '/shopify/store/remove', // 店铺管理模块--删除店铺
  linkShopify: 'shopify/store/auth', // 手动关联店铺--- connect
  storeProductList: '/shopify/store/productList', // 店铺管理模块——原始产品列表
  storeProductCount: '/shopify/store/queryProductNum', // 店铺管理模块——原始产品各种状态的数量
  storeProductEditDetail: '/shopify/store/queryProductDetail', // 店铺管理模块---编辑产品详情
  storeQueryRelatedProduct: '/shopify/store/queryRelatedProduct', // 店铺管理模块---查询关联产品信息
  updateRelatedStatus: '/shopify/store/updateRelatedStatus', // 店铺管理模块——更新关联供货商产品状态
  relatedSupplierProduct: '/shopify/store/relatedSupplierProduct', // 店铺管理模块——关联供货商产品
  productList: '/shopify/product/list', // 产品模块——产品列表
  productCount: '/shopify/product/countInfo', // 产品模块——统计数量
  updateCustomizeStatus: '/shopify/product/updateStatus', // 产品模块——更新定制化状态
  productDetail: '/shopify/product/detail', // 显示产品详情
  logisticsMethod: '/shopify/product/logisticsMethod', // 产品模块——获取物流方式信息
  orderList: '/shopify/order/list', // 订单---列表
  orderCount: '/shopify/order/countInfo', // 订单---统计数量
  orderSummary: '/shopify/order/summary', // 订单--概要
  createOrder: '/shopify/order/createOrder', // 订单--创建
  orderDetail: '/shopify/order/queryDetail', // 订单--订单详情
  leaveMessage: '/shopify/order/addMessage', // 订单--订单留言
  cancelOrder: '/shopify/order/refund', // 订单--取消订单
  payOrder: '/shopify/order/pay', // 订单--付款
  callbackStore: 'shopify/store/auth/callback',
  embedstore: '/shopify/embed/store' // 嵌入模块-查询店铺信息
  /*, baseDataList : '/supplier/common/baseDataList'         //供应产品品类列表
  ,standardList: '/supplier/product/list'               //标准产品列表
  ,collectionList: '/supplier/product/collectionList'   //集合列表
  ,queryCollectionList:'/supplier/product/collectionSummaryList' //集合列表 不用分页
  ,collectionDetail:'/supplier/product/collectionDetail'//产品集合详情
  ,addCollection: '/supplier/product/addCollection'      //新增集合
  ,update_Collection: '/supplier/product/updateCollection' //编辑集合
  ,fileUpLoad: '/supplier/common/fileUpload'             //图片上传公共
  ,productList:'/supplier/product/list'                 //产品列表
  ,update_CollectionStatus:'/supplier/product/updateCollectionStatus'  //更新集合状态
  ,deleteCollection: '/supplier/product/deleteCollection'               //删除集合
  ,grounding_Product: '/supplier/product/groundingProduct'    //产品下架
  ,productDetail: '/supplier/product/productDetail'           //产品详情
  ,updateProduct: '/supplier/product/updateProduct'          //修改产品
	,save_Product: '/supplier/product/addProduct'              //添加保存产品
  ,addProductTo_Collection: '/supplier/product/addProductToCollection' //添加进产品集合
  ,deleteProduct_FromCollection: '/supplier/product/deleteProductFromCollection' //删除集合里的产品
  ,userCustomization:'/supplier/product/customizeList' // 查询定制化列表
  ,customizeDetail:'/supplier/product/customizeDetail' // 查看定制化详情
  ,updateCustomize:'/supplier/product/updateCustomize' // 更新定制化信息
  ,customizeCntInfo:'/supplier/product/queryCustomizeCnt' // 用户定制tabs页面（已确认、待审核、沟通确认中、已拒绝）数量统计
  ,deleteFile:'/supplier/product/deleteFile'           //删除上传图片
  ,stockList:'/supplier/product/stockList'             //查看库存列表信息
  ,updateInventory:'/supplier/product/updateInventory'
  ,menu_num:'/supplier/product/queryLeftMenuCnt'  //左侧导航数字统计 */

};
