// 笃威尔 MCP 目录数据 · 由 output/build-catalog.js 从正式环境接口清单生成
// 五度易链 API 开放平台 · 正式环境（api.datadowell.com） · 抓取日期 2026-11-09 · 9 个业务 Server · 106 个 MCP Tool
const mcpCatalogData = {
  source:  "五度易链 API 开放平台 · 正式环境（api.datadowell.com）",
  fetchedAt:  "2026-11-09",
  servers:  [
    {
      id:  "search",
      name:  "搜索查询 MCP Server",
      shortName:  "搜索查询",
      label:  "快速定位",
      icon:  "search",
      accent:  "blue",
      description:  "企业名称模糊搜索、高级筛选与专利检索，帮助智能体第一步锁定目标主体。",
      skills:  [
        "企业尽调 Skill",
        "可行性研究报告 Skill",
        "招商策略分析报告 Skill"
      ],
      previewIds:  [
        1,
        91,
        134,
        147
      ]
    },
    {
      id:  "business-info",
      name:  "工商信息 MCP Server",
      shortName:  "工商信息",
      label:  "主体画像",
      icon:  "building-2",
      accent:  "blue",
      description:  "覆盖工商档案、股东高管、对外投资、股权穿透、上市与年报，是识别和锚定企业主体的基础能力。",
      skills:  [
        "企业尽调 Skill",
        "受益所有人识别 Skill",
        "供应商年度体检 Skill",
        "企业全景分析报告 Skill"
      ],
      previewIds:  [
        144,
        6,
        8,
        9
      ]
    },
    {
      id:  "judicial",
      name:  "司法诉讼 MCP Server",
      shortName:  "司法诉讼",
      label:  "司法风险",
      icon:  "scale",
      accent:  "red",
      description:  "聚合失信被执行、裁判文书、开庭公告、立案信息与破产重整等司法记录。",
      skills:  [
        "企业风险核查 Skill",
        "供应商年度体检 Skill"
      ],
      previewIds:  [
        13,
        14,
        58,
        59
      ]
    },
    {
      id:  "intellectual-property",
      name:  "知识产权 MCP Server",
      shortName:  "知识产权",
      label:  "创新资产",
      icon:  "lightbulb",
      accent:  "orange",
      description:  "专利、商标、软件著作权、标准、知识产权出质与网站备案等创新资产信息。",
      skills:  [],
      previewIds:  [
        48,
        49,
        51,
        52
      ]
    },
    {
      id:  "enterprise-development",
      name:  "企业发展 MCP Server",
      shortName:  "企业发展",
      label:  "成长动态",
      icon:  "trending-up",
      accent:  "teal",
      description:  "融资事件、榜单荣誉、科技成果、新闻舆情与投资事件等企业发展动态。",
      skills:  [
        "投前咨询分析报告 Skill"
      ],
      previewIds:  [
        84,
        85,
        86,
        87
      ]
    },
    {
      id:  "operation-risk",
      name:  "经营风险 MCP Server",
      shortName:  "经营风险",
      label:  "风险信号",
      icon:  "shield-alert",
      accent:  "red",
      description:  "行政处罚、经营异常、股权出质、税收违法、欠税与抵押等经营风险信号。",
      skills:  [
        "企业风险核查 Skill",
        "供应商年度体检 Skill"
      ],
      previewIds:  [
        12,
        64,
        65,
        70
      ]
    },
    {
      id:  "operation-info",
      name:  "经营信息 MCP Server",
      shortName:  "经营信息",
      label:  "经营画像",
      icon:  "briefcase-business",
      accent:  "teal",
      description:  "资质许可、招投标、纳税信用、招聘、产品与土地等经营信息。",
      skills:  [
        "可行性研究报告 Skill",
        "供应商年度体检 Skill"
      ],
      previewIds:  [
        63,
        68,
        77,
        78
      ]
    },
    {
      id:  "global-enterprise",
      name:  "全球企业 MCP Server",
      shortName:  "全球企业",
      label:  "全球主体",
      icon:  "globe",
      accent:  "blue",
      description:  "中国香港企业等境外主体信息查询。",
      skills:  [],
      previewIds:  [
        122
      ]
    },
    {
      id:  "value-added",
      name:  "增值服务 MCP Server",
      shortName:  "增值服务",
      label:  "增值能力",
      icon:  "sparkles",
      accent:  "orange",
      description:  "空壳扫描、工程资质查询等深度核验类增值服务。",
      skills:  [],
      previewIds:  [
        145,
        146
      ]
    }
  ],
  apis:  [
    {
      id:  1,
      name:  "企业模糊搜索",
      scene:  "90",
      price:  0.01,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/fuzzy_query/",
      description:  "通过搜索关键字（企业名称、注册地址、经营范围、统一社会信用代码、注册号、法人、股东）获取匹配搜索条件的企业，返回企业名称、曾用名、注册资金、成立日期、经营状态等字段信息。",
      fields:  [
        "企业id",
        "企业名称",
        "曾用名",
        "注册资本",
        "统一社会信用代码",
        "法定代表人名称",
        "成立日期"
      ],
      serverId:  "search",
      toolName:  "company.search",
      internal:  false
    },
    {
      id:  91,
      name:  "企业高级筛选",
      scene:  "90",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/entadvquery/",
      description:  "根据特定的输入条件查询企业的列表信息，支持企业名称、经营范围、注册地址的精确搜索和模糊搜索，以及省份地区、行业分类、成立年限等的条件筛选。",
      fields:  [
        "企业名称",
        "经营范围",
        "注册地址",
        "省份地区",
        "行业名称",
        "成立日期",
        "注册资本",
        "企业状态"
      ],
      serverId:  "search",
      toolName:  "company.api_091",
      internal:  false
    },
    {
      id:  134,
      name:  "企业模糊搜索（简化版）",
      scene:  "90",
      price:  0.01,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/fuzzy_query_v2/",
      description:  "输入搜索关键词，可通过企业名称、注册地址、经营范围、统一社会信用代码、注册号、法人、股东查找企业。其中企业名称支持分词模糊查询，法人、股东、注册地址和经营范围仅支持完整关键词模糊查询。查询结果为默认排序，展示企业名称、曾用名、注册资金、成立日期、经营状态等内容。",
      fields:  [
        "企业id",
        "企业名称",
        "曾用名",
        "注册资本",
        "统一社会信用代码",
        "法定代表人名称",
        "成立日期"
      ],
      serverId:  "search",
      toolName:  "business.api_134",
      internal:  false
    },
    {
      id:  147,
      name:  "专利模糊搜索",
      scene:  "90",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_patent_fuzzy/",
      description:  "通过搜索关键词（申请人名称/发明人名称/专利公告标题/专利申请号/申请公布号）查询专利的相关信息。其中申请人名称、发明人名称和专利公告标题支持分词模糊查询，专利申请号和申请公布号仅支持完整关键词模糊查询。",
      fields:  [
        "专利类型",
        "专利标题",
        "法律状态",
        "专利申请号",
        "专利公告号"
      ],
      serverId:  "search",
      toolName:  "risk.api_147",
      internal:  false
    },
    {
      id:  148,
      name:  "专利高级筛选",
      scene:  "90",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_patent_senior/",
      description:  "在关键词模糊搜索的基础上，增加了专利类型、法律状态、申请日期、公开（公告）日期的筛选条件，返回专利标题、专利类型、法律状态等详细信息。",
      fields:  [
        "专利类型",
        "专利标题",
        "法律状态",
        "专利申请号",
        "专利公告号"
      ],
      serverId:  "search",
      toolName:  "search.api_148",
      internal:  false
    },
    {
      id:  144,
      name:  "企业工商信息",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/enterprise_business_info/",
      description:  "支持通过企业/个体工商户/组织机构ID、完整名称、统一社会信用代码或注册号，查询其详细信息，包括统一社会信用代码、注册资本、经营范围、成立日期、经营状态等核心字段，覆盖企业、个体工商户、组织机构三类主体。",
      fields:  [
        "企业名称",
        "公司类型",
        "注册资本",
        "统一信用代码",
        "经营范围",
        "成立日期",
        "登记机关名称"
      ],
      serverId:  "business-info",
      toolName:  "business.api_144",
      internal:  false
    },
    {
      id:  6,
      name:  "股东信息",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_stockholder_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业股东信息，包括出资比例、出资方式、出资日期等字段的详细信息。",
      fields:  [
        "股东名称",
        "出资日期",
        "出资方式",
        "出资比例",
        "认缴出资金额",
        "投资人类型"
      ],
      serverId:  "business-info",
      toolName:  "relation.shareholders",
      internal:  false
    },
    {
      id:  8,
      name:  "高管信息",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_management_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业高管信息，包括职位、姓名等字段的详细信息。",
      fields:  [
        "姓名",
        "职位",
        "是否法人"
      ],
      serverId:  "business-info",
      toolName:  "company.executives",
      internal:  false
    },
    {
      id:  9,
      name:  "变更记录",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_changeRecord_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询变更记录信息，包括变更前、变更后、变更日期、变更事项等字段信息。",
      fields:  [
        "变更日期",
        "变更后信息",
        "变更事项",
        "变更前信息"
      ],
      serverId:  "business-info",
      toolName:  "company.changes",
      internal:  false
    },
    {
      id:  10,
      name:  "企业对外投资",
      scene:  "91",
      price:  0.8,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_investment_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业对外投资信息，包括出资方式、出资日期、企业类型等字段信息。",
      fields:  [
        "企业名称",
        "出资日期",
        "认缴出资金额",
        "企业类型",
        "企业状态",
        "注册资本"
      ],
      serverId:  "business-info",
      toolName:  "relation.investment",
      internal:  false
    },
    {
      id:  11,
      name:  "分支机构",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_branch_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业分支机构信息，包括企业地址、分支机构名称、统一社会信用代码等字段信息。",
      fields:  [
        "分支机构名称",
        "分支机构负责人",
        "企业地址",
        "成立日期",
        "企业状态"
      ],
      serverId:  "business-info",
      toolName:  "company.branches",
      internal:  false
    },
    {
      id:  50,
      name:  "上市企业查询",
      scene:  "91",
      price:  0.5,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_listing_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码 查询企业在主板和新三板的上市情况，包括股票代码、股票简称、上市日期等字段的详细信息。",
      fields:  [
        "股票代码",
        "股票简称",
        "上市日期",
        "上市状态",
        "上市版块",
        "交易市场",
        "股票类别"
      ],
      serverId:  "business-info",
      toolName:  "company.api_50",
      internal:  false
    },
    {
      id:  67,
      name:  "上市公司公告",
      scene:  "91",
      price:  0.6,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_listed_pub_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询上市公司公告信息，包括公告标题、公告日期、公告分类等字段的详细信息。",
      fields:  [
        "企业名称",
        "证券代码",
        "证券简称",
        "公告标题",
        "公告日期",
        "公告分类"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_067",
      internal:  false
    },
    {
      id:  88,
      name:  "企业年报",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_ar_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的年报信息，包括年报基本信息、股东变更信息、网站信息、出资信息等年报详细信息。",
      fields:  [
        "企业基本信息",
        "网站或网店信息",
        "股东出资信息",
        "企业资产信息",
        "股权变更信息",
        "社保信息"
      ],
      serverId:  "business-info",
      toolName:  "company.api_88",
      internal:  false
    },
    {
      id:  89,
      name:  "港股上市",
      scene:  "91",
      price:  0.6,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_aggre_list_query/",
      description:  "根据港股企业完整名称查询企业的港股上市信息，包括证券代码、证券简称、上市日期、上市版块等字段的详细信息。",
      fields:  [
        "企业名称",
        "上市日期",
        "上市版块",
        "所属交易所",
        "证券代码",
        "证券简称"
      ],
      serverId:  "business-info",
      toolName:  "company.api_89",
      internal:  false
    },
    {
      id:  90,
      name:  "十大流通股东",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_listed_tenstk_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的十大流通股东信息，包括证券代码、证券简称、股东名称、持有比例等字段的详细信息。",
      fields:  [
        "股东名称",
        "变动原因",
        "持有总数量",
        "持有比例",
        "报告期内增减股份数量"
      ],
      serverId:  "business-info",
      toolName:  "company.api_90",
      internal:  false
    },
    {
      id:  94,
      name:  "企业三要素核验",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_three_keys_chk/",
      description:  "通过输入公司编号（统一社会信用代码/组织机构代码/注册号）、企业名称、法定代表人名称，验证三者是否匹配一致。",
      fields:  [
        "企业名称",
        "公司编号",
        "法定代表人名称",
        "核验结果"
      ],
      serverId:  "business-info",
      toolName:  "company.api_94",
      internal:  false
    },
    {
      id:  95,
      name:  "税务发票抬头信息",
      scene:  "91",
      price:  1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_bank/",
      description:  "根据企业id、企业名称、统一社会信用代码或注册号等关键字进行搜索，查询企业的税务发票抬头信息。",
      fields:  [
        "企业名称",
        "统一社会信用代码",
        "开户银行",
        "银行账号",
        "企业通信地址"
      ],
      serverId:  "business-info",
      toolName:  "company.api_95",
      internal:  false
    },
    {
      id:  96,
      name:  "企业公开联系方式",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_lianxi_multi_source/",
      description:  "根据企业id、企业名称、统一社会信用代码或注册号等关键字进行搜索，查询企业从多个来源获取的公开联系方式。",
      fields:  [
        "姓名,职务,联系方式,联系方式类别,来源"
      ],
      serverId:  "business-info",
      toolName:  "business.api_096",
      internal:  false
    },
    {
      id:  97,
      name:  "法人对外投资任职信息",
      scene:  "91",
      price:  0.5,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/legal_inv_officer/",
      description:  "通过输入关键词（企业唯一标识、企业名称、统一社会信用代码或注册号以及法人姓名），获取法人在其他企业中担任法定代表人的信息，以及投资详情和对外任职情况。",
      fields:  [
        "担任法人信息,对外投资信息,在外任职信息"
      ],
      serverId:  "business-info",
      toolName:  "company.api_97",
      internal:  false
    },
    {
      id:  101,
      name:  "历史投资任职信息【董监高】",
      scene:  "91",
      price:  0.5,
      method:  "POST",
      url:  " https://gateway.qyxqk.com/wdyl/openapihd/officer_history_search/ ",
      description:  "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取该人员在其他企业中担任的各种角色的具体情况，包括但不限于被投方企业名称、变更类型及日期、投资方个人/企业名称、变动前后的认缴金额和投资占比等详细信以及该人员作为历史股东的完整记录，包括其在不同企业的任职情况，如任职企业名称、职位中文、入职和离职日期等。",
      fields:  [
        "被投方企业名称,变动后投资占比,变动后认缴金额,任职企业名称,职位中文,入职日期"
      ],
      serverId:  "business-info",
      toolName:  "company.invoice_title",
      internal:  false
    },
    {
      id:  102,
      name:  "在外投资任职核查【董监高】",
      scene:  "91",
      price:  0.5,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_detail_management_invest/",
      description:  "显示企业高管在外的投资和任职情况，包括被投企业信息、高管职务等，有助于评估高管的商业活动范围和关联性，用于风险管理和合规审查等。",
      fields:  [
        "被投企业名称,出资比例,出资日期,任职企业名称,职务,任职企业成立日期"
      ],
      serverId:  "business-info",
      toolName:  "company.public_contact",
      internal:  false
    },
    {
      id:  104,
      name:  "关联个体户核查",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_detail_mainPerson_self/ ",
      description:  "提供企业关键人物负责的个体商户信息，如商户名称、注册号、注册资本、状态等，帮助识别企业与个体商户之间的关联关系。",
      fields:  [
        "法人姓名,企业名称,注册资本,企业状态,成立日期"
      ],
      serverId:  "business-info",
      toolName:  "company.api_104",
      internal:  false
    },
    {
      id:  105,
      name:  "企业图谱",
      scene:  "91",
      price:  2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_genealogy/",
      description:  "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号），获取详尽的企业族谱数据，包含企业的基本信息和企业与关联实体（如股东、高管、投资公司等）之间的关系链。",
      fields:  [
        "统一社会信用代码,企业状态,注册资本,认缴出资日期,认缴出资额,出资比例"
      ],
      serverId:  "business-info",
      toolName:  "company.api_105",
      internal:  false
    },
    {
      id:  106,
      name:  "人员所有角色",
      scene:  "91",
      price:  2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/inv_manager_individual/ ",
      description:  "全面获取特定人员在其他企业中的所有角色和活动情况，包括担任法定代表人、股东、高管以及个体工商户的详细信息。",
      fields:  [
        "担任法人信息,担任股东信息,担任历史股东信息,担任高管信息,担任历史高管信息"
      ],
      serverId:  "business-info",
      toolName:  "company.api_106",
      internal:  false
    },
    {
      id:  109,
      name:  "机构类型",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_basic_org_type/",
      description:  "根据企业id/企业完整名称/社会统一信用代码/注册号查询企业机构类型信息，包含企业类型、机构类型和经济类型等字段，经济类型包含外商投资企业、民营企业、国有企业和港澳台投资企业。",
      fields:  [
        "企业类型",
        "机构类型",
        "经济类型"
      ],
      serverId:  "business-info",
      toolName:  "company.api_109",
      internal:  false
    },
    {
      id:  113,
      name:  "企业信息深度查询",
      scene:  "91",
      price:  2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_info_deep_search/",
      description:  "可根据企业相关参数进行查询，获取企业多维度详细信息，包括但不限于企业名称、统一社会信用代码、法定代表人、成立日期、注册资本、经营状态、邮箱、地址、经营范围、联系电话、注销日期、法人类型、经营场所、纳税人类型、参保人数、企业官网、纳税信用评级、是否上市、企业基本信息、主要管理人员及其职位、分支机构信息、变更事项及内容等。",
      fields:  [
        "企业基本信息,法定代表人其他公司任职,年度年报,企业对外投资信息,严重违法,行政处罚"
      ],
      serverId:  "business-info",
      toolName:  "business.api_113",
      internal:  false
    },
    {
      id:  131,
      name:  "律所基本信息",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/law_firm_info_query/",
      description:  "支持通过律所ID、律所完整名称、统一社会信用代码，查询律师事务所的详细信息，包括统一社会信用代码、设立资产、主管机关名称、邮政编码、组织类型等核心字段。",
      fields:  [
        "律所名称",
        "统一社会信用代码",
        "组织类型",
        "准予设立日期",
        "经营地址"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_131",
      internal:  false
    },
    {
      id:  132,
      name:  "分支机构所属总公司",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/parent_company_query/",
      description:  "根据企业ID、企业完整名称、工商注册号、统一社会信用代码获取所归属的总公司详细信息。",
      fields:  [
        "总公司名称",
        "统一社会信用代码",
        "法定代表人名称",
        "注册日期",
        "经营范围"
      ],
      serverId:  "business-info",
      toolName:  "risk.case_process",
      internal:  false
    },
    {
      id:  133,
      name:  "企业规模",
      scene:  "91",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/enterprise_scale/",
      description:  "根据企业ID、企业完整名称、工商注册号、统一社会信用代码查询企业规模。（声明：本评估结果由公开大数据分析测算形成。鉴于数据获取存在客观局限，相关结果仅供参考，不作为商业决策依据。五度易链对数据真实性、准确性、全面性、时效性不承担责任，不负责使用者据此产生的任何商业风险，且保留调整相关观点与表述的权利。）",
      fields:  [
        "企业名称",
        "统一社会信用代码",
        "注册号",
        "企业规模"
      ],
      serverId:  "business-info",
      toolName:  "business.api_133",
      internal:  false
    },
    {
      id:  136,
      name:  "合作风险排查",
      scene:  "91",
      price:  6,
      method:  "POST",
      url:  " https://gateway.qyxqk.com/wdyl/openapi/cooperation_risk_assessment/",
      description:  "根据企业id/企业完整名称/社会统一信用代码获取企业的工商信息、资质证书、司法信息、行政处罚、经营异常、严重违法失信、税务信息、海关企业信息等多维度风险数据，帮助业务系统快速完成合作方风险识别与准入审核。",
      fields:  [
        "工商信息",
        "资质信息",
        "司法信息",
        "行政处罚",
        "经营异常",
        "严重违法",
        "税务信息",
        "海关企业"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_136",
      internal:  false
    },
    {
      id:  137,
      name:  "股权变更（工商公示）",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/equityChange/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的股权变更信息，包括变更前后的股份占比、认缴金额、变更日期等字段的详细信息。",
      fields:  [
        "企业ID",
        "企业名称",
        "变动前股份占比",
        "变动后股份占比",
        "变更日期"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_137",
      internal:  false
    },
    {
      id:  139,
      name:  "最终受益人",
      scene:  "91",
      price:  1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/ultimate_beneficiary_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业最终受益人信息，包括受益人名称、最终持股比例、持股链条等字段的详细信息。",
      fields:  [
        "企业名称",
        "受益人",
        "受益人持股比例",
        "股权穿透链路",
        "总穿透层级"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_139",
      internal:  false
    },
    {
      id:  140,
      name:  "十大受益人",
      scene:  "91",
      price:  1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/beneficiary_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业受益所有人信息，包括受益人名称、最终持股比例、持股链条等字段的详细信息。",
      fields:  [
        "企业名称",
        "受益人",
        "受益人持股比例",
        "股权穿透链路",
        "总穿透层级"
      ],
      serverId:  "business-info",
      toolName:  "risk.api_140",
      internal:  false
    },
    {
      id:  150,
      name:  "股权穿透（十层）",
      scene:  "91",
      price:  4,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/equity_through/",
      description:  "支持通过企业ID、企业全称或统一社会信用代码，向上递归穿透查询最多十层股东链。输出内容涵盖各层级公司名称、股东出资比例、完整股权路径及层级标识，且不限持股比例，全面还原企业多层次股权投资关系，高效辅助股权结构分析与风险排查。",
      fields:  [
        "股东名称",
        "对应的children数量",
        "企业名称",
        "类型",
        "出资比例",
        "查询企业的出资比例",
        "层级"
      ],
      serverId:  "business-info",
      toolName:  "company.api_150",
      internal:  false
    },
    {
      id:  151,
      name:  "实际控制人",
      scene:  "91",
      price:  0.8,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/actual_controller/",
      description:  "支持通过企业ID、企业全称或统一社会信用代码查询企业的实际控制人信息，返回实控人基本信息、最终受益股份、穿透层级及完整的股权控制链路明细。支持返回多条控制链路径（最多10条），每条路径展示完整的股东层级结构。",
      fields:  [
        "企业名称",
        "实控人名称",
        "最终受益股份比例",
        "是否法人",
        "总穿透层级",
        "控制链数量",
        "控制链详情"
      ],
      serverId:  "business-info",
      toolName:  "business.api_151",
      internal:  false
    },
    {
      id:  5,
      name:  "企业基本信息（即将下线，请调用企业工商信息接口）",
      scene:  "91",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_basic_query/",
      description:  "支持通过企业ID、企业完整名称、统一社会信用代码或注册号，查询其详细信息，包括统一社会信用代码、注册资本、经营范围、成立日期、经营状态等核心字段，覆盖企业、个体工商户、非工商机构三类主体。",
      fields:  [
        "企业名称",
        "公司类型",
        "注册资本",
        "统一信用代码",
        "经营范围",
        "成立日期",
        "登记机关名称"
      ],
      serverId:  "business-info",
      toolName:  "company.profile",
      internal:  true
    },
    {
      id:  13,
      name:  "失信被执行人",
      scene:  "92",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_dishonest_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询失信被执行人信息，包括被执行人名称、执行法院、执行标的等字段信息。",
      fields:  [
        "案号",
        "执行依据文号",
        "执行法院",
        "被执行人的履行情况",
        "立案时间"
      ],
      serverId:  "judicial",
      toolName:  "risk.dishonest_execute",
      internal:  false
    },
    {
      id:  14,
      name:  "司法协助",
      scene:  "92",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_justice_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业司法协助信息，包括执行法院、执行事项、被执行人名称等字段的详细信息。",
      fields:  [
        "案号",
        "执行法院",
        "立案时间",
        "执行事项",
        "执行通知文书",
        "股权数额"
      ],
      serverId:  "judicial",
      toolName:  "risk.judicial_assistance",
      internal:  false
    },
    {
      id:  58,
      name:  "被执行人",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_execute_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业被执行人，包括案号、执行法院名称、立案时间等字段的详细信息。",
      fields:  [
        "案号",
        "执行法院",
        "立案时间",
        "执行标的",
        "被执行人姓名/名称"
      ],
      serverId:  "judicial",
      toolName:  "risk.api_058",
      internal:  false
    },
    {
      id:  59,
      name:  "裁判文书",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_cpws_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的裁判文书，包括标题、案由名称、判决结果等字段的详细信息。",
      fields:  [
        "标题",
        "案由名称",
        "案号",
        "主体名称",
        "判决结果",
        "裁定日期",
        "案件类型"
      ],
      serverId:  "judicial",
      toolName:  "risk.api_059",
      internal:  false
    },
    {
      id:  60,
      name:  "开庭公告",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_ktgg_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的开庭公告信息，包括案号、案由、开庭日期等字段的详细信息。",
      fields:  [
        "案号",
        "案由",
        "开庭日期",
        "法院名称",
        "原告",
        "被告",
        "其他当事人"
      ],
      serverId:  "judicial",
      toolName:  "business.qualification",
      internal:  false
    },
    {
      id:  61,
      name:  "终本案件",
      scene:  "92",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_endcase_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的终本案件，包括案号、执行标的、当事人等字段的详细信息。",
      fields:  [
        "案号",
        "执行法院名称",
        "立案时间",
        "执行标的",
        "未履行金额",
        "当事人"
      ],
      serverId:  "judicial",
      toolName:  "risk.api_061",
      internal:  false
    },
    {
      id:  62,
      name:  "立案信息",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_lian_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的立案信息，包括案由、案号、立案日期等字段的详细信息。",
      fields:  [
        "案由",
        "案号",
        "立案日期",
        "法院",
        "案件状态"
      ],
      serverId:  "judicial",
      toolName:  "risk.abnormal_operation",
      internal:  false
    },
    {
      id:  66,
      name:  "限制高消费",
      scene:  "92",
      price:  0.06,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_court_xgl_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的限制高消费信息，包括案号、案由、限制令对象等字段的详细信息。",
      fields:  [
        "案号",
        "限消令对象",
        "关联对象",
        "申请人",
        "立案时间",
        "发布时间"
      ],
      serverId:  "judicial",
      toolName:  "risk.api_066",
      internal:  false
    },
    {
      id:  69,
      name:  "破产重整",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_bankruptcy_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码  查询企业破产重整信息，包括案号、公告标题、公开日期等字段的详细信息。",
      fields:  [
        "案号",
        "公告标题",
        "申请人",
        "被申请人",
        "公开日期"
      ],
      serverId:  "judicial",
      toolName:  "risk.api_069",
      internal:  false
    },
    {
      id:  103,
      name:  "失信被执行核查【董监高】",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/dishonest_execute_person/",
      description:  "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）以及失信被执行人姓名/名称，查询目标企业该人员的失信被执行相关数据。",
      fields:  [
        "案号,失信被执行人行为具体情形,执行标的,执行法院,履行情况,立案时间"
      ],
      serverId:  "judicial",
      toolName:  "legal.api_103",
      internal:  false
    },
    {
      id:  107,
      name:  "被执行人核查【董监高】",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/execute_person/",
      description:  "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）以及被执行人姓名/名称，查询目标企业该人员的被执行相关数据。",
      fields:  [
        "案号,执行标的,执行法院名称,立案时间"
      ],
      serverId:  "judicial",
      toolName:  "legal.api_107",
      internal:  false
    },
    {
      id:  110,
      name:  "案件流程",
      scene:  "92",
      price:  0.5,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_case_flow/ ",
      description:  "追踪案件从立案到归档的整个流程，包括但不限于立案日期、当事人、主要法官、内容、流程状态等。",
      fields:  [
        "案号,立案日期,当事人,法院名称,内容,流程状态"
      ],
      serverId:  "judicial",
      toolName:  "legal.api_110",
      internal:  false
    },
    {
      id:  141,
      name:  "法院公告详情",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/courtBulletinDetail/",
      description:  "根据法院公告ID查询企业的法院公告信息，包括案号、原告、被告、案由名称、公告正文等字段的详细信息。",
      fields:  [
        "案号",
        "原告",
        "被告",
        "案由"
      ],
      serverId:  "judicial",
      toolName:  "business.api_141",
      internal:  false
    },
    {
      id:  143,
      name:  "法院公告列表",
      scene:  "92",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/courtBulletinList/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的法院公告信息，包括案号、原告、被告、案由名称、公告类型等字段的详细信息。",
      fields:  [
        "案号",
        "原告",
        "被告",
        "案由"
      ],
      serverId:  "judicial",
      toolName:  "legal.api_143",
      internal:  false
    },
    {
      id:  48,
      name:  "软件著作权",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_software_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业软件著作权，包括登记号、软件简称、著作人等字段的详细信息。",
      fields:  [
        "软件简称",
        "分类号名称",
        "首次发表日期",
        "登记号",
        "著作人"
      ],
      serverId:  "intellectual-property",
      toolName:  "business.api_048",
      internal:  false
    },
    {
      id:  49,
      name:  "专利基本信息",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_patent_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码 查询企业对应的专利基本信息，包括申请号、发明/设计人、分类号等字段的详细信息。",
      fields:  [
        "专利标题",
        "专利分类",
        "分类号",
        "公告号",
        "发明/设计人"
      ],
      serverId:  "intellectual-property",
      toolName:  "business.api_049",
      internal:  false
    },
    {
      id:  51,
      name:  "国家标准",
      scene:  "93",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_bz_country_query/",
      description:  "指企业参与制定的国家标准，可根据企业id/企业完整名称/社会统一信用代码查询企业的国家标准，包括标准号、标准属性、标准名称等字段的详细信息。",
      fields:  [
        "标准号",
        "标准级别",
        "标准属性",
        "标准名称",
        "起草单位",
        "发布日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "ip.trademark",
      internal:  false
    },
    {
      id:  52,
      name:  "作品著作权",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_copyright_production_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业作品著作权，包括登记号、作品名称、作品类别等字段的详细信息。",
      fields:  [
        "登记号",
        "作品名称",
        "作品类别",
        "创作完成日期",
        "首次发表日期",
        "登记日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "ip.api_52",
      internal:  false
    },
    {
      id:  53,
      name:  "行业标准",
      scene:  "93",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_bz_industry_query/",
      description:  "指企业参与制定的行业标准，可根据企业id/企业完整名称/社会统一信用代码查询企业的行业标准，包括标准号、标准属性、标准名称等字段的详细信息。",
      fields:  [
        "标准号",
        "标准级别",
        "标准属性",
        "标准名称",
        "起草单位",
        "发布日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "business.api_053",
      internal:  false
    },
    {
      id:  54,
      name:  "商标基本信息",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_tminfo_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的商标信息，包括商标分类、商标名称、申请日期等字段的详细信息。",
      fields:  [
        "商标名称",
        "商标分类",
        "商标状态",
        "注册号/申请号",
        "申请日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "business.api_054",
      internal:  false
    },
    {
      id:  56,
      name:  "知识产权出质",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_ipr_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码 查询企业的企业知识产权出质信息，包括种类、质权人名称、出质人名称等字段的详细信息。",
      fields:  [
        "种类",
        "名称",
        "知识产权登记证号",
        "质权人名称",
        "出质人名称",
        "公示日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "risk.judgment",
      internal:  false
    },
    {
      id:  57,
      name:  "ICP网站备案",
      scene:  "93",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_icp_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的ICP网站备案信息，包括备案类型、网站域名、公告备案号等字段的详细信息。",
      fields:  [
        "网站名称",
        "网站域名",
        "备案类型",
        "公安备案号",
        "审核/备案日期"
      ],
      serverId:  "intellectual-property",
      toolName:  "ip.api_57",
      internal:  false
    },
    {
      id:  84,
      name:  "上榜榜单",
      scene:  "94",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_fc_thirdtop_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的上榜榜单信息，包括榜单名称、排名、榜单类型等字段的详细信息。",
      fields:  [
        "榜单名称",
        "榜单类型",
        "来源url",
        "排名",
        "发布日期"
      ],
      serverId:  "enterprise-development",
      toolName:  "business.api_084",
      internal:  false
    },
    {
      id:  85,
      name:  "企业荣誉",
      scene:  "94",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_billboard_golory_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的荣誉信息，包括荣誉名称、荣誉级别、状态等字段的详细信息。",
      fields:  [
        "荣誉名称",
        "荣誉级别",
        "发布日期",
        "有效期起",
        "有效期至"
      ],
      serverId:  "enterprise-development",
      toolName:  "company.annual_report",
      internal:  false
    },
    {
      id:  86,
      name:  "科技成果",
      scene:  "94",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_most_scitech_query/",
      description:  "根据企业id/ 企业完整名称/统一社会信用代码查询企业的科技成果信息，包括批准登记号、成果完成单位、成果名称等字段的详细信息。",
      fields:  [
        "批准登记号",
        "成果完成单位",
        "成果完成人",
        "成果名称",
        "成果登记年份"
      ],
      serverId:  "enterprise-development",
      toolName:  "company.api_086",
      internal:  false
    },
    {
      id:  87,
      name:  "融资信息",
      scene:  "94",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_vc_inv_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业的融资信息，包括投资日期、投资的详细金额、投资的轮次名称等字段的详细信息。",
      fields:  [
        "投资日期",
        "投资的轮次名称",
        "估值明细",
        "投资的详细金额",
        "机构名称"
      ],
      serverId:  "enterprise-development",
      toolName:  "company.api_087",
      internal:  false
    },
    {
      id:  129,
      name:  "新闻列表",
      scene:  "94",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/getNewsListByName",
      description:  "根据企业全名/注册号/统一社会信用代码查询新闻列表信息，搜索结果可根据舆情分类、 情感属性等进行筛选，返回包括新闻来源、情感属性、舆情标签、负面指数等字段信息。",
      fields:  [
        "标题",
        "发布日期",
        "简介",
        "情感属性",
        "事件分类"
      ],
      serverId:  "enterprise-development",
      toolName:  "company.api_129",
      internal:  false
    },
    {
      id:  130,
      name:  "投资事件",
      scene:  "94",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/investment_financing_event/",
      description:  "支持通过投资机构名称获取投资事件信息，企业投资事件信息包括投资事件轮次、金额、投资方、融资企业、行业等字段的详细信息。",
      fields:  [
        "投资机构",
        "投资日期",
        "融资企业名称",
        "行业名称",
        "投资轮次名称"
      ],
      serverId:  "enterprise-development",
      toolName:  "business.api_130",
      internal:  false
    },
    {
      id:  12,
      name:  "行政处罚",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_punish_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询行政处罚信息，包括处罚执行情况、处罚机关、案由等字段的详细信息。",
      fields:  [
        "主要违法事实",
        "处罚结果",
        "处罚决定文书",
        "处罚金额",
        "处罚机关",
        "案发时间"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.penalty",
      internal:  false
    },
    {
      id:  64,
      name:  "股权出质",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_impawn_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的股权出质信息，包括出质人、质权人、执行状态等字段的详细信息。",
      fields:  [
        "出质人",
        "质权人",
        "质押金额",
        "执行状态",
        "质押备案日期"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.high_consumption",
      internal:  false
    },
    {
      id:  65,
      name:  "经营异常",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_case_abnormity_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的异常经营信息，包括列入日期、列入原因、登记/移入机关等字段的详细信息。",
      fields:  [
        "列入日期",
        "列入原因",
        "登记/移入机关"
      ],
      serverId:  "operation-risk",
      toolName:  "company.api_065",
      internal:  false
    },
    {
      id:  70,
      name:  "土地抵押",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_land_mort_query/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询企业土地抵押信息，包括宗地地址、土地抵押人名称、土地抵押权人等字段的详细信息。",
      fields:  [
        "宗地地址",
        "抵押金额",
        "抵押面积",
        "起始登记日期",
        "结束登记日期"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_070",
      internal:  false
    },
    {
      id:  71,
      name:  "动产抵押",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_mort_info_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的动产抵押信息，包括抵押权人信息、抵押物信息、担保范围信息等数据信息。",
      fields:  [
        "登记证号",
        "状态标识",
        "抵押权人",
        "抵押物名称",
        "登记机关",
        "登记日期"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_071",
      internal:  false
    },
    {
      id:  72,
      name:  "重大税收违法",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_tax_case_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业重大税收违法信息，包括案件性质、认定日期、发布机关等字段的详细信息。",
      fields:  [
        "案件性质",
        "主要违法事实",
        "认定日期",
        "发布机关"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_072",
      internal:  false
    },
    {
      id:  73,
      name:  "简易注销",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_cancel_easy_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业简易注销信息，返回承诺书路径、登记机关、审核结果等字段的详细信息。",
      fields:  [
        "企业名称",
        "登记机关",
        "统一社会信用代码",
        "公告期自",
        "公告期至",
        "审核结果"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_073",
      internal:  false
    },
    {
      id:  74,
      name:  "清算信息",
      scene:  "95",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_liquidation_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业清算信息，包括清算负责人、清算组成员字段信息。",
      fields:  [
        "清算负责人",
        "清算组成员"
      ],
      serverId:  "operation-risk",
      toolName:  "business.administrative_license",
      internal:  false
    },
    {
      id:  75,
      name:  "欠税信息",
      scene:  "95",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_tax_arrears_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的欠税信息，包括所属税务机关、欠缴税种、总欠税额等字段的详细信息。",
      fields:  [
        "本期新欠金额",
        "总欠税额",
        "欠缴税种",
        "公告日期",
        "所属税务机关"
      ],
      serverId:  "operation-risk",
      toolName:  "business.api_075",
      internal:  false
    },
    {
      id:  76,
      name:  "严重违法",
      scene:  "95",
      price:  0.3,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_case_yzwfsx_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业严重违法信息，包括列入日期、列入原因、列入决定机关等字段的详细信息。",
      fields:  [
        "列入日期",
        "列入决定机关",
        "列入原因"
      ],
      serverId:  "operation-risk",
      toolName:  "business.api_076",
      internal:  false
    },
    {
      id:  111,
      name:  "行政处罚（保监会）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_circ_penalty/ ",
      description:  "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，提供保监会对保险机构实施的行政处罚信息，包括当事人、处罚内容、日期及决定机关等。",
      fields:  [
        "当事企业,当事人,文号,日期,内容"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_111",
      internal:  false
    },
    {
      id:  114,
      name:  "行政处罚（食药监）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_food_drug_penalty/",
      description:  "提供食品药品监督管理部门对企业实施的行政处罚记录，包括违法行为类型、处罚种类、依据及结果等。",
      fields:  [
        "行政处罚决定书文号",
        "主要违法事实",
        "行政处罚种类和依据",
        "行政处罚的履行方式和期限"
      ],
      serverId:  "operation-risk",
      toolName:  "business.api_114",
      internal:  false
    },
    {
      id:  116,
      name:  "行政处罚（税务局）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_tax_admin_penalty/",
      description:  "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取税务局对企业实施的行政处罚记录，涵盖案件性质、主要违法事实、处罚结果及决定书文号等信息。",
      fields:  [
        "主要违法事实",
        "处罚结果",
        "决定书文号",
        "决定机关",
        "决定日期"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.hearing_notice",
      internal:  false
    },
    {
      id:  119,
      name:  "行政处罚（证监会）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_csrc_penalty/",
      description:  "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取证监会对证券市场参与者实施的行政处罚记录，涵盖主要违法事实、处罚依据及决定机关等。",
      fields:  [
        "当事企业",
        "当事人",
        "文号",
        "发文日期",
        "发布机构",
        "内容"
      ],
      serverId:  "operation-risk",
      toolName:  "relation.api_119",
      internal:  false
    },
    {
      id:  120,
      name:  "行政处罚（银监会）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_cbrc_penalty/",
      description:  "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取银监会对金融机构实施的行政处罚详情，涵盖违法违规事实、处罚依据及决定等。",
      fields:  [
        "处罚文号,主要违法违规事实,行政处罚决定,作出处罚决定的机关名称,作出处罚决定的日期"
      ],
      serverId:  "operation-risk",
      toolName:  "relation.company_graph",
      internal:  false
    },
    {
      id:  123,
      name:  "行政处罚（大数据）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_bigdata_punish/",
      description:  "整合了来自多个来源（信用中国，地方工商局，各个部委）的行政处罚详情，如处罚决定日期、处罚种类、行政部门、事由、依据、结果、金额及处罚执行情况等。",
      fields:  [
        "决定书文号,处罚决定日期,处罚行政部门,处罚事由,处罚结果,处罚金额"
      ],
      serverId:  "operation-risk",
      toolName:  "relation.executive_external_roles",
      internal:  false
    },
    {
      id:  124,
      name:  "行政处罚（人民银行）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_pboc_penalty/",
      description:  "可根据企业相关参数进行查询，获取中国人民银行对企业实施的行政处罚信息，包括违法行为类型、处罚内容及决定机关等。",
      fields:  [
        "决定书文号",
        "违法行为类型",
        "行政处罚内容",
        "决定机关名称",
        "决定日期"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_124",
      internal:  false
    },
    {
      id:  128,
      name:  "失信行政处罚（海关）",
      scene:  "95",
      price:  0.2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_customs_dishonest_penalty/",
      description:  "可根据企业相关参数进行查询，获取海关对企业实施的失信处罚信息，涵盖案件名称、处罚内容、日期及企业管理类别等。",
      fields:  [
        "编号",
        "处罚内容",
        "处罚日期",
        "企业管理类别",
        "海关编码"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_128",
      internal:  false
    },
    {
      id:  236,
      name:  "注销备案",
      scene:  "95",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/getLogoutRecordByName/",
      description:  "根据企业完整名称/社会统一信用代码查询企业注销备案信息，包括登记机关、清算组负责人、清算组成员、债权人公告、状态等信息。",
      fields:  [
        "企业名称",
        "统一社会信用代码",
        "登记机关",
        "清算组备案日期",
        "债权人公告日期",
        "公告内容"
      ],
      serverId:  "operation-risk",
      toolName:  "risk.api_236",
      internal:  false
    },
    {
      id:  63,
      name:  "资质查询",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_cnca5_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业的食品农产品认证、服务认证、管理体系认证、强制性产品认证、自愿性工业产品认证信息，包括证书编号、颁证日期、发证机构名称等字段信息。",
      fields:  [
        "认证项目大类",
        "认证项目小类",
        "颁证日期",
        "证书编号",
        "发证机构名称",
        "证书状态"
      ],
      serverId:  "operation-info",
      toolName:  "business.tax_rating",
      internal:  false
    },
    {
      id:  68,
      name:  "纳税信用评级",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_tax_rating_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业纳税信用评级，包括纳税人识别号、评定年份、评级等字段的详细信息。",
      fields:  [
        "纳税人识别号",
        "企业名称",
        "评定年份",
        "评级"
      ],
      serverId:  "operation-info",
      toolName:  "risk.api_068",
      internal:  false
    },
    {
      id:  77,
      name:  "行政许可",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_certificate_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业行政许可信息，包括决定文书/许可编号、许可文件名称、许可机关等字段的详细信息。",
      fields:  [
        "许可编号",
        "许可文件名称",
        "有效期自",
        "有效期至",
        "许可机关",
        "许可内容"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_077",
      internal:  false
    },
    {
      id:  78,
      name:  "招聘信息",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_job_info_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业招聘信息，包括招聘标题、薪资、学历等字段的详细信息。",
      fields:  [
        "招聘标题",
        "发布日期",
        "薪资",
        "工作年限",
        "学历",
        "工作城市"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_078",
      internal:  false
    },
    {
      id:  79,
      name:  "抽查检查",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_case_check_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业抽查检查信息，包括巡查日期、巡查类型、监管发现问题等字段的详细信息。",
      fields:  [
        "属地监管工商所",
        "巡查日期",
        "巡查类型",
        "监管发现问题"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_079",
      internal:  false
    },
    {
      id:  80,
      name:  "双随机抽查",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_case_randomcheck_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业双随机抽查信息，包括任务名称、抽查机关、完成日期等字段的详细信息。",
      fields:  [
        "计划编号",
        "任务名称",
        "抽查事项",
        "抽查结果",
        "抽查机关",
        "完成日期"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_80",
      internal:  false
    },
    {
      id:  81,
      name:  "土地转让",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_mlrland_transfer_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业土地转让信息，包括宗地地址、行政区、成交时间等字段的详细信息。",
      fields:  [
        "宗地地址",
        "原土地使用权人",
        "现土地使用权人",
        "成交时间"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_081",
      internal:  false
    },
    {
      id:  82,
      name:  "电信许可",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_aggre_cert_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码查询企业电信许可信息，包括许可范围、许可文件名称、许可文件编号等字段的详细信息。",
      fields:  [
        "企业名称",
        "许可范围",
        "许可文件名称",
        "许可文件编号",
        "有效期自",
        "有效期至"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_082",
      internal:  false
    },
    {
      id:  92,
      name:  "招投标列表",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_bid_list_query/",
      description:  "根据企业id/ 企业完整名称/社会统一信用代码/公告类型/角色/公告年份查询企业招投标信息列表，包括公告标题、公告类型、地区名称等字段的详细信息。",
      fields:  [
        "公告日期",
        "公告标题",
        "公告类型",
        "地区名称",
        "角色"
      ],
      serverId:  "operation-info",
      toolName:  "business.tender_list",
      internal:  false
    },
    {
      id:  93,
      name:  "招投标详情",
      scene:  "96",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_bid_detail_query/",
      description:  "通过招投标公告的唯一标识（MID）查询关联企业的标讯详情，包括标讯基本信息、招标方、中标方、代理方、标讯正文等核心数据。",
      fields:  [
        "公告标题",
        "公告类型",
        "招标方",
        "中标方",
        "代理方",
        "公告正文"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_93",
      internal:  false
    },
    {
      id:  98,
      name:  "苹果市场",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_detail_product_ios/",
      description:  "提供企业在苹果App Store的表现信息，包括应用图标、名称、分类、下载数、当前版本评论数量及发布日期等。",
      fields:  [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_98",
      internal:  false
    },
    {
      id:  99,
      name:  "安卓市场",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_detail_product_android/",
      description:  "展示企业在安卓应用市场的表现，如应用图标、名称、分类、下载数、开发者、用户评分及 发布日期等。",
      fields:  [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_99",
      internal:  false
    },
    {
      id:  100,
      name:  "产品信息",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/company_detail_product/",
      description:  "根据企业ID、企业完整名称、工商注册号、统一社会信用代码、组织机构代码查询企业产品的详细信息，包括图标、名称、分类、下载数、用户评分及发布日期等。",
      fields:  [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      serverId:  "operation-info",
      toolName:  "company.three_factor_verify",
      internal:  false
    },
    {
      id:  115,
      name:  "土地信息",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_land_info/",
      description:  "查询企业持有的土地信息，包括电子监管号、项目名称、位置、面积、用途、使用年限等。",
      fields:  [
        "电子监管号",
        "项目名称",
        "项目位置",
        "面积",
        "土地用途",
        "土地使用年限"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_115",
      internal:  false
    },
    {
      id:  121,
      name:  "行政许可（大数据）",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_admin_licenese_bd/",
      description:  "提供企业获得的行政许可信息，特别侧重于通过各个部委收集和分析得到的许可详情，返回数据包括许可文件ID、编号及名称，有效期的起止日期，以及颁发许可的机关和许可状态等关键信息。",
      fields:  [
        "许可文件编号",
        "许可文件名称",
        "有效期开始日期",
        "有效期结束日期",
        "许可机关",
        "许可文件状态"
      ],
      serverId:  "operation-info",
      toolName:  "relation.api_121",
      internal:  false
    },
    {
      id:  125,
      name:  "食品经营许可",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_food_manage_permission/",
      description:  "提供企业的食品经营许可信息，揭示企业在食品经营领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等。",
      fields:  [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      serverId:  "operation-info",
      toolName:  "relation.api_125",
      internal:  false
    },
    {
      id:  126,
      name:  "食品生产许可（QS）",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_food_productqs_permission/",
      description:  "提供企业的食品生产许可（QS）信息，揭示企业在食品生产领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等。",
      fields:  [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      serverId:  "operation-info",
      toolName:  "company.api_126",
      internal:  false
    },
    {
      id:  127,
      name:  "食品生产许可（SC）",
      scene:  "96",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/enterprise_food_productsc_permission/",
      description:  "提供企业的食品生产许可（SC）信息，揭示企业在食品生产领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等。",
      fields:  [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      serverId:  "operation-info",
      toolName:  "company.api_127",
      internal:  false
    },
    {
      id:  149,
      name:  "纳税人类型",
      scene:  "96",
      price:  0.12,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/taxpayer_type/",
      description:  "根据企业id/企业完整名称/社会统一信用代码查询纳税人相关信息，包括纳税人名称、纳税人识别号、纳税人资格类型、主管税务机关、有效期起、有效期止等字段的信息，纳税人类型包括一般纳税人、小规模纳税人等。",
      fields:  [
        "纳税人名称",
        "纳税人识别号",
        "纳税人资格代码",
        "主管税务机关",
        "税务登记状态"
      ],
      serverId:  "operation-info",
      toolName:  "business.api_149",
      internal:  false
    },
    {
      id:  122,
      name:  "中国香港企业信息",
      scene:  "97",
      price:  0.1,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapihd/hk_enterprise_search/",
      description:  "允许用户通过企业名称、注册日期和主体状态为入参，快速获取中国香港企业的详细信息，此接口提供的数据包括但不限于主体名称、企业编号、注册日期、主体类型、主体状态、注销日期、联系方式、官网地址及主要人员等。",
      fields:  [
        "主体名称",
        "企业编号",
        "注册日期",
        "主体类型",
        "主体状态",
        "联系方式"
      ],
      serverId:  "global-enterprise",
      toolName:  "risk.executive_execute_check",
      internal:  false
    },
    {
      id:  145,
      name:  "空壳扫描",
      scene:  "98",
      price:  2,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/shell_query/",
      description:  "聚焦套牌、僵尸、皮包等非正常经营企业识别，依托市场经营、财务信息等多维度数据实施综合扫描。（声明：本评估结果由公开大数据分析测算形成。鉴于数据获取存在客观局限，相关结果仅供参考，不作为商业决策依据。五度易链对数据真实性、准确性、全面性、时效性不承担责任，不负责使用者据此产生的任何商业风险，且保留调整相关观点与表述的权利。）",
      fields:  [
        "未正常经营",
        "未披露参保数据",
        "未正常注册实缴"
      ],
      serverId:  "value-added",
      toolName:  "business.api_145",
      internal:  false
    },
    {
      id:  146,
      name:  "工程资质查询",
      scene:  "98",
      price:  0.15,
      method:  "POST",
      url:  "https://gateway.qyxqk.com/wdyl/openapi/company_qualification_query/",
      description:  "通过企业 ID、企业完整名称或统一社会信用代码，查询企业工程资质信息（涵盖建筑业企业资质、设计资质、监理资质、勘察资质），返回资质名称、资质证书号、发证机关等字段。",
      fields:  [
        "资质类别",
        "资质证书号",
        "资质名称",
        "发证日期",
        "发证机关"
      ],
      serverId:  "value-added",
      toolName:  "business.api_146",
      internal:  false
    }
  ]
};

if (typeof window !== 'undefined') window.mcpCatalogData = mcpCatalogData;
if (typeof module !== 'undefined' && module.exports) module.exports = mcpCatalogData;
