const mcpCatalogData = {
  "source": "五度易链 API 市场",
  "fetchedAt": "2026-08-27",
  "servers": [
    {
      "id": "enterprise-diligence",
      "name": "企业尽调 MCP Server",
      "shortName": "企业尽调",
      "label": "企业研究",
      "icon": "search-check",
      "accent": "blue",
      "description": "围绕企业主体、工商画像和经营基本面，支撑企业尽调、供应商准入和基础信息核验。",
      "skills": [
        "企业尽调 Skill",
        "供应商年度体检 Skill"
      ],
      "previewIds": [
        1,
        5,
        8,
        85
      ]
    },
    {
      "id": "risk-compliance",
      "name": "风险与合规 MCP Server",
      "shortName": "风险与合规",
      "label": "风控场景",
      "icon": "shield-alert",
      "accent": "red",
      "description": "聚合司法诉讼、经营风险和监管记录，支持风险扫描、合规审查和合作前排查。",
      "skills": [
        "企业风险核查 Skill",
        "供应商年度体检 Skill"
      ],
      "previewIds": [
        12,
        13,
        56,
        62
      ]
    },
    {
      "id": "equity-relations",
      "name": "股权与关系 MCP Server",
      "shortName": "股权与关系",
      "label": "关系分析",
      "icon": "network",
      "accent": "orange",
      "description": "围绕股东、实际控制人、受益所有人和关联任职关系，支撑股权穿透和关联分析。",
      "skills": [
        "受益所有人识别 Skill",
        "企业尽调 Skill"
      ],
      "previewIds": [
        6,
        120,
        170,
        182
      ]
    },
    {
      "id": "ip-operations",
      "name": "知识产权与经营 MCP Server",
      "shortName": "知识产权与经营",
      "label": "经营数据",
      "icon": "badge-check",
      "accent": "teal",
      "description": "提供知识产权、资质许可、经营动态和企业发展数据，补充竞争力与经营核验。",
      "skills": [
        "经营核验 Skill",
        "供应商年度体检 Skill"
      ],
      "previewIds": [
        44,
        51,
        60,
        92
      ]
    }
  ],
  "apis": [
    {
      "id": 1,
      "name": "企业模糊搜索",
      "scene": "110",
      "price": 0.01,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/fuzzy_query/",
      "description": "通过企业名称模糊搜索匹配企业，返回企业名称、历史名、注册资本等字段信息",
      "fields": [
        "企业名称",
        "企业id",
        "曾用名",
        "注册资本"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.search",
      "internal": false
    },
    {
      "id": 5,
      "name": "企业基本信息",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_basic_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业基本信息，包括统一信用代码、注册资本、经营范围等字段的详细信息",
      "fields": [
        "企业名称",
        "法人",
        "企业地址",
        "股东",
        "高管",
        "注册资本"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.profile",
      "internal": false
    },
    {
      "id": 6,
      "name": "股东信息",
      "scene": "101",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_stockholder_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询企业股东信息，包括出资比例、出资方式、出资日期等字段的详细信息",
      "fields": [
        "股东名称",
        "出资日期",
        "出资方式",
        "出资比例",
        "认缴出资金额",
        "投资人类型"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.shareholders",
      "internal": false
    },
    {
      "id": 8,
      "name": "高管信息",
      "scene": "101",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_management_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码获取企业工商的主要人员信息，包括岗 位职称、人员姓名等字段的详细信息。",
      "fields": [
        "姓名",
        "职位",
        "是否法人"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.executives",
      "internal": false
    },
    {
      "id": 9,
      "name": "变更记录",
      "scene": "101",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_changeRecord_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询变更记录信息，包括变更前内容、 变更后内容、变更日期、变更事项名称等字段信息。",
      "fields": [
        "变更日期",
        "变更后内容",
        "变更事项名称",
        "变更前内容"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.changes",
      "internal": false
    },
    {
      "id": 10,
      "name": "企业对外投资",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_investment_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业对外投资信息，包括投资日期、 经济类型名称等字段信息。",
      "fields": [
        "企业名称",
        "出资日期",
        "认缴出资金额",
        "企业类型",
        "企业状态",
        "注册资本"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.investment",
      "internal": false
    },
    {
      "id": 11,
      "name": "分支机构",
      "scene": "101",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_branch_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业分支机构信息，包括分支机构 注册地址、分支机构名称、统一社会信用代码等字段信息。",
      "fields": [
        "分支机构名称",
        "分支机构负责人",
        "企业地址",
        "成立日期",
        "企业状态"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.branches",
      "internal": false
    },
    {
      "id": 12,
      "name": "行政处罚",
      "scene": "107",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_punish_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询行政处罚信息，包括处罚执行情况、处罚机关、案由等字段的详细信息",
      "fields": [
        "主要违法事实",
        "处罚结果",
        "处罚决定文书",
        "处罚金额",
        "处罚机关",
        "案发时间"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.penalty",
      "internal": false
    },
    {
      "id": 13,
      "name": "失信被执行人",
      "scene": "102",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_dishonest_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询失信被执行人信息，包括被执行人名称、执行法院、执行标的等字段信息",
      "fields": [
        "案号",
        "执行依据文号",
        "执行法院",
        "被执行人的履行情况",
        "立案时间"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.dishonest_execute",
      "internal": false
    },
    {
      "id": 14,
      "name": "司法协助",
      "scene": "102",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_justice_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询企业司法协助信息，包括执行法院、执行事项、被执行人名称等字段的详细信息",
      "fields": [
        "案号",
        "执行法院",
        "立案时间",
        "执行事项",
        "执行通知文书",
        "股权数额"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.judicial_assistance",
      "internal": false
    },
    {
      "id": 43,
      "name": "软件著作权",
      "scene": "103",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_software_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业软件著作权",
      "fields": [
        "软件简称",
        "分类号名称",
        "首次发表日期",
        "登记号",
        "著作人"
      ],
      "serverId": "ip-operations",
      "toolName": "ip.software_copyright",
      "internal": false
    },
    {
      "id": 44,
      "name": "专利基本信息",
      "scene": "103",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_patent_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业对应的专利基本信息",
      "fields": [
        "专利标题",
        "专利分类",
        "分类号",
        "公告号",
        "发明/设计人"
      ],
      "serverId": "ip-operations",
      "toolName": "ip.patent",
      "internal": false
    },
    {
      "id": 46,
      "name": "上市企业查询",
      "scene": "101",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_listing_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码 查询企业在主板和新三板的上市情况，包括股票代码、股票简称、上市日期等字段的详细信息。",
      "fields": [
        "股票代码",
        "股票简称",
        "上市日期",
        "上市状态",
        "上市版块",
        "交易市场",
        "股票类别"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.listing",
      "internal": false
    },
    {
      "id": 47,
      "name": "企业国家标准查询",
      "scene": "103",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bz_country_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的国家标准",
      "fields": [
        "标准号",
        "标准级别",
        "标准属性",
        "标准名称",
        "起草单位",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_047",
      "internal": false
    },
    {
      "id": 48,
      "name": "企业产业标准查询",
      "scene": "103",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bz_industry_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的产业标准",
      "fields": [
        "标准号",
        "标准级别",
        "标准属性",
        "标准名称",
        "起草单位",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_048",
      "internal": false
    },
    {
      "id": 49,
      "name": "作品著作权",
      "scene": "103",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_copyright_production_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业作品著作权",
      "fields": [
        "登记号",
        "作品名称",
        "作品类别",
        "创作完成日期",
        "首次发表日期",
        "登记日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_049",
      "internal": false
    },
    {
      "id": 51,
      "name": "商标基本信息",
      "scene": "103",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_tminfo_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的商标信息",
      "fields": [
        "商标名称",
        "商标分类",
        "商标状态",
        "注册号/申请号",
        "申请日期"
      ],
      "serverId": "ip-operations",
      "toolName": "ip.trademark",
      "internal": false
    },
    {
      "id": 53,
      "name": "ICP网站备案",
      "scene": "103",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_icp_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的ICP信息",
      "fields": [
        "网站名称",
        "网站域名",
        "备案类型",
        "公安备案号",
        "审核/备案日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_053",
      "internal": false
    },
    {
      "id": 54,
      "name": "知识产权出质",
      "scene": "103",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_ipr_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的企业知识产权出质",
      "fields": [
        "种类",
        "名称",
        "知识产权登记证号",
        "质权人名称",
        "出质人名称",
        "公示日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_054",
      "internal": false
    },
    {
      "id": 55,
      "name": "被执行人",
      "scene": "102",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_execute_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业被执行人（人员）",
      "fields": [
        "案号",
        "执行法院",
        "立案时间",
        "执行标的",
        "被执行人姓名/名称"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.execute_person",
      "internal": false
    },
    {
      "id": 56,
      "name": "裁判文书",
      "scene": "102",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_cpws_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码 查询企业的裁判文书",
      "fields": [
        "标题",
        "案由名称",
        "案号",
        "主体名称",
        "判决结果",
        "裁定日期",
        "案件类型"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.judgment",
      "internal": false
    },
    {
      "id": 58,
      "name": "终本案件",
      "scene": "102",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_endcase_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的终本案件",
      "fields": [
        "案号",
        "执行法院名称",
        "立案时间",
        "执行标的",
        "未履行金额",
        "当事人"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_058",
      "internal": false
    },
    {
      "id": 59,
      "name": "立案信息",
      "scene": "102",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_lian_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的立案信息",
      "fields": [
        "案由",
        "案号",
        "立案日期",
        "法院",
        "案件状态"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_059",
      "internal": false
    },
    {
      "id": 60,
      "name": "资质查询",
      "scene": "108",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_cnca5_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的 食品农产品 、服务、管理体系、强制性产品、自愿性工业产品 认证",
      "fields": [
        "认证项目",
        "证书类型",
        "颁证日期",
        "证书编号",
        "机构名称",
        "证书状态"
      ],
      "serverId": "ip-operations",
      "toolName": "business.qualification",
      "internal": false
    },
    {
      "id": 61,
      "name": "股权出质",
      "scene": "107",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_impawn_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的 股权质押信息",
      "fields": [
        "出质人",
        "质权人",
        "质押金额",
        "执行状态",
        "质押备案日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_061",
      "internal": false
    },
    {
      "id": 62,
      "name": "经营异常",
      "scene": "107",
      "price": 0.3,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_case_abnormity_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的异常经营信息",
      "fields": [
        "列入日期",
        "列入原因",
        "登记/移入机关"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.abnormal_operation",
      "internal": false
    },
    {
      "id": 63,
      "name": "纳税信用评级",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_tax_rating_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询企业纳税信用评级，包括纳税人识别号、评定年份、信用评级等字段的详细信息。",
      "fields": [
        "纳税人识别号",
        "企业名称",
        "评定年份",
        "评级"
      ],
      "serverId": "ip-operations",
      "toolName": "business.tax_rating",
      "internal": false
    },
    {
      "id": 64,
      "name": "限制高消费",
      "scene": "102",
      "price": 0.06,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_xgl_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的限制高消费信息",
      "fields": [
        "案号",
        "限消令对象",
        "关联对象",
        "申请人",
        "立案时间",
        "发布时间"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.high_consumption",
      "internal": false
    },
    {
      "id": 65,
      "name": "企业上市公告查询",
      "scene": "101",
      "price": 0.6,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_listed_pub_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业上市公告信息",
      "fields": [
        "企业名称",
        "证券代码",
        "证券简称",
        "公告标题",
        "公告日期",
        "公告分类"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_065",
      "internal": false
    },
    {
      "id": 66,
      "name": "破产重整",
      "scene": "102",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bankruptcy_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业破产重整信息",
      "fields": [
        "案号",
        "公告标题",
        "申请人",
        "被申请人",
        "公开日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_066",
      "internal": false
    },
    {
      "id": 67,
      "name": "企业土地抵押查询",
      "scene": "107",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_land_mort_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业土地抵押信息",
      "fields": [
        "登记证号",
        "状态标识",
        "抵押权人",
        "抵押物名称",
        "登记机关",
        "登记日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_067",
      "internal": false
    },
    {
      "id": 68,
      "name": "动产抵押",
      "scene": "107",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_mort_info_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的动产抵押信息",
      "fields": [
        "案件性质",
        "主要违法事实",
        "认定日期",
        "发布机关"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_068",
      "internal": false
    },
    {
      "id": 69,
      "name": "企业重大税收违法查询",
      "scene": "107",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_tax_case_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业重大税收违法信息",
      "fields": [
        "案件性质",
        "主要违法事实",
        "认定日期",
        "发布机关"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_069",
      "internal": false
    },
    {
      "id": 70,
      "name": "企业简易注销查询",
      "scene": "107",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_cancel_easy_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业简易注销信息",
      "fields": [
        "企业名称",
        "登记机关",
        "统一社会信用代码",
        "公告期自",
        "公告期至",
        "审核结果"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_070",
      "internal": false
    },
    {
      "id": 71,
      "name": "清算信息",
      "scene": "107",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_liquidation_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业清算信息",
      "fields": [
        "清算负责人",
        "清算组成员"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_071",
      "internal": false
    },
    {
      "id": 72,
      "name": "企业欠税信息查询",
      "scene": "107",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_tax_arrears_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询企业的欠税信息，包括所属税务机关、税种类型、总欠税金额等字段的详细信息。",
      "fields": [
        "本期新欠金额",
        "总欠税额",
        "欠缴税种",
        "公告日期",
        "所属税务机关"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_072",
      "internal": false
    },
    {
      "id": 73,
      "name": "严重违法",
      "scene": "107",
      "price": 0.3,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_case_yzwfsx_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业严重违法信息",
      "fields": [
        "列入日期",
        "列入决定机关",
        "列入原因"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_073",
      "internal": false
    },
    {
      "id": 74,
      "name": "行政许可",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_certificate_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业行政许可信息",
      "fields": [
        "许可编号",
        "许可文件名称",
        "有效期自",
        "有效期至",
        "许可机关",
        "许可内容"
      ],
      "serverId": "ip-operations",
      "toolName": "business.administrative_license",
      "internal": false
    },
    {
      "id": 75,
      "name": "招聘信息",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_job_info_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业招聘信息",
      "fields": [
        "招聘标题",
        "发布日期",
        "薪资",
        "工作年限",
        "学历",
        "工作城市"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_075",
      "internal": false
    },
    {
      "id": 76,
      "name": "抽查检查",
      "scene": "108",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_case_check_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业抽查检查信息",
      "fields": [
        "属地监管工商所",
        "巡查日期",
        "巡查类型",
        "监管发现问题"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_076",
      "internal": false
    },
    {
      "id": 77,
      "name": "双随机抽查",
      "scene": "108",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_case_randomcheck_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业双随机抽查信息",
      "fields": [
        "计划编号",
        "任务名称",
        "抽查事项",
        "抽查结果",
        "抽查机关",
        "完成日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_077",
      "internal": false
    },
    {
      "id": 78,
      "name": "土地转让",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_mlrland_transfer_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业土地转让信息",
      "fields": [
        "宗地地址",
        "原土地使用权人",
        "现土地使用权人",
        "成交时间"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_078",
      "internal": false
    },
    {
      "id": 79,
      "name": "电信许可",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_aggre_cert_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业电信许可信息",
      "fields": [
        "企业名称",
        "许可范围",
        "许可文件名称",
        "许可文件编号",
        "有效期自",
        "有效期至"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_079",
      "internal": false
    },
    {
      "id": 81,
      "name": "企业上榜榜单查询",
      "scene": "106",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_fc_thirdtop_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的上榜榜单信息",
      "fields": [
        "榜单名称",
        "榜单类型",
        "来源url",
        "排名",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_081",
      "internal": false
    },
    {
      "id": 82,
      "name": "企业荣誉",
      "scene": "106",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_billboard_golory_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的荣誉资质信息",
      "fields": [
        "荣誉名称",
        "荣誉级别",
        "发布日期",
        "有效期起",
        "有效期至"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_082",
      "internal": false
    },
    {
      "id": 83,
      "name": "企业科技成果查询",
      "scene": "106",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_most_scitech_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的科技成果信息",
      "fields": [
        "登记号",
        "第一完成单位",
        "成果完成人",
        "成果名称",
        "年份"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_083",
      "internal": false
    },
    {
      "id": 84,
      "name": "融资信息",
      "scene": "106",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_vc_inv_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的融资信息",
      "fields": [
        "投资日期",
        "投资的轮次名称",
        "估值明细",
        "投资的详细金额",
        "机构名称"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_084",
      "internal": false
    },
    {
      "id": 85,
      "name": "企业年报信息查询",
      "scene": "101",
      "price": 0.6,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_ar_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的年报信息",
      "fields": [
        "企业基本信息",
        "网站或网店信息",
        "股东出资信息",
        "企业资产信息",
        "股权变更信息",
        "社保信息"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.annual_report",
      "internal": false
    },
    {
      "id": 86,
      "name": " 港股上市",
      "scene": "101",
      "price": 0.6,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_aggre_list_query/",
      "description": "根据港股企业完整名称查询企业的港股上市信息，包括证券代码、证券简称、上市日期、上市版块等字段的详细信息。",
      "fields": [
        "企业名称",
        "上市日期",
        "上市版块",
        "所属交易所",
        "证券代码",
        "证券简称"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_086",
      "internal": false
    },
    {
      "id": 87,
      "name": "企业十大流通股东查询",
      "scene": "101",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_listed_tenstk_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业的十大流通股东信息",
      "fields": [
        "股东名称",
        "变动原因",
        "持有总数量",
        "持有比例",
        "报告期内增减股份数量"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_087",
      "internal": false
    },
    {
      "id": 91,
      "name": "企业高级筛选",
      "scene": "110",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/entadvquery/",
      "description": "根据输入条件查询企业的列表信息",
      "fields": [
        "企业名称",
        "经营范围",
        "注册地址",
        "省份地区",
        "行业名称",
        "成立日期",
        "注册资本",
        "企业状态"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_091",
      "internal": false
    },
    {
      "id": 92,
      "name": "招投标列表",
      "scene": "108",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bid_list_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码/公告类型/角色/公告年份查询企业招投标信息，包括公告标题、公告类型、地区名称等字段的详细信息。",
      "fields": [
        "公告日期",
        "公告标题",
        "公告类型",
        "地区名称",
        "角色"
      ],
      "serverId": "ip-operations",
      "toolName": "business.tender_list",
      "internal": false
    },
    {
      "id": 96,
      "name": "招投标详情",
      "scene": "108",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bid_detail_query/",
      "description": "通过招投标公告的唯一标识（MID）查询关联企业的标讯详情，包括标讯基本信息、招标方、中标方、代理方、标的物、标讯正文等核心数据。",
      "fields": [
        "公告标题",
        "公告类型",
        "招标方",
        "中标方",
        "代理方",
        "标的物",
        "公告正文"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_096",
      "internal": false
    },
    {
      "id": 100,
      "name": "企业三要素核验",
      "scene": "101",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_three_keys_chk/",
      "description": "通过输入公司编号（统一社会信用代码/组织机构代码/注册号）、企业名称、法定代表人名称，验证三者是否匹配一致。",
      "fields": [
        "企业名称",
        "公司编号",
        "法定代表人名称",
        "核验结果"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.three_factor_verify",
      "internal": false
    },
    {
      "id": 101,
      "name": "税务发票抬头信息",
      "scene": "101",
      "price": 1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_bank/",
      "description": "跟据企业名称、统一社会信用代码或注册号等关键字进行搜索，查询企业的税务发票抬头信息",
      "fields": [
        "企业名称",
        "统一社会信用代码",
        "开户银行",
        "银行账号",
        "企业通信地址"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.invoice_title",
      "internal": false
    },
    {
      "id": 102,
      "name": "企业公开联系方式",
      "scene": "101",
      "price": 0.01,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_lianxi_multi_source/",
      "description": "根据企业id、企业名称、统一社会信用代码或注册号等关键字进行搜索，查询企业从多个来源获取的公开联系方式。",
      "fields": [
        "姓名",
        "职务",
        "联系方式",
        "联系方式类别",
        "来源"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.public_contact",
      "internal": false
    },
    {
      "id": 112,
      "name": "法人对外投资任职信息",
      "scene": "101",
      "price": 0.5,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/legal_inv_officer/",
      "description": "通过输入关键词（企业唯一标识、企业名称、统一社会信用代码或注册号以及法人姓名），获取法人在其他企业中担任法定代表人的信息，以及投资详情和对外任职情况。",
      "fields": [
        "担任法人信息",
        "对外投资信息",
        "在外任职信息"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.api_112",
      "internal": false
    },
    {
      "id": 113,
      "name": "产品信息",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_detail_product/",
      "description": "提供企业产品的详细信息，包括图标、名称、分类、下载数、用户评分及发布日期等。",
      "fields": [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_113",
      "internal": false
    },
    {
      "id": 114,
      "name": "安卓市场",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_detail_product_android/",
      "description": "展示企业在安卓应用市场的表现，如应用图标、名称、分类、下载数、开发者、用户评分及 发布日期等。",
      "fields": [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_114",
      "internal": false
    },
    {
      "id": 115,
      "name": "苹果市场",
      "scene": "108",
      "price": 0.12,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_detail_product_ios/",
      "description": "提供企业在苹果AppStore的表现信息，包括应用图标、名称、分类、下载数、当前版本评 论数量及发布日期等。",
      "fields": [
        "图标",
        "名称",
        "下载数",
        "版本号",
        "发布日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_115",
      "internal": false
    },
    {
      "id": 116,
      "name": "开庭公告",
      "scene": "102",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_court_ktgg_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码查询企业的开庭公告信息，包括案号、案由、开庭日期等字段的详细信息。",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.hearing_notice",
      "internal": false
    },
    {
      "id": 118,
      "name": "机构类型",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_basic_org_type/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业机构类型信息，包含企业类型、机构类型和经济类型等字段，经济类型包含外商投资企业、民营企业、国有企业和港澳台投资企业。",
      "fields": [
        "企业类型",
        "机构类型",
        "经济类型"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_118",
      "internal": false
    },
    {
      "id": 119,
      "name": "人员所有角色",
      "scene": "101",
      "price": 2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/inv_manager_individual/",
      "description": "全面获取特定人员在其他企业中的所有角色和活动情况，包括担任法定代表人、股东、高管以及个体工商户的详细信息。",
      "fields": [
        "担任法人信息",
        "担任股东信息",
        "担任历史股东信息",
        "担任高管信息",
        "担任历史高管信息"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.api_119",
      "internal": false
    },
    {
      "id": 120,
      "name": "企业图谱",
      "scene": "101",
      "price": 2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_genealogy/",
      "description": "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号），获取详尽的企业族谱数据，包含企业的基本信息和企业与关联实体（如股东、高管、投资公司等）之间的关系链。",
      "fields": [
        "统一社会信用代码",
        "企业状态",
        "注册资本",
        "认缴出资日期",
        "认缴出资额",
        "出资比例"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.company_graph",
      "internal": false
    },
    {
      "id": 121,
      "name": "关联个体户核查",
      "scene": "101",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_detail_mainPerson_self/",
      "description": "提供企业关键人物负责的个体商户信息，如商户名称、注册号、注册资本、状态等，帮助识别企业与个体商户之间的关联关系。",
      "fields": [
        "法人姓名",
        "企业名称",
        "注册资本",
        "企业状态",
        "成立日期"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.api_121",
      "internal": false
    },
    {
      "id": 122,
      "name": "被执行人核查【董监高】",
      "scene": "102",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/execute_person/",
      "description": "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）以及被执行人姓名/名称，查询目标企业该人员的被执行相关数据。",
      "fields": [
        "案号",
        "执行标的",
        "执行法院名称",
        "立案时间"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.executive_execute_check",
      "internal": false
    },
    {
      "id": 123,
      "name": "在外投资任职核查【董监高】",
      "scene": "101",
      "price": 0.5,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_detail_management_invest/",
      "description": "显示企业高管在外的投资和任职情况，包括被投企业信息、高管职务等，有助于评估高管的商业活动范围和关联性，用于风险管理和合规审查等。",
      "fields": [
        "被投企业名称",
        "出资比例",
        "出资日期",
        "任职企业名称",
        "职务",
        "任职企业成立日期"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.executive_external_roles",
      "internal": false
    },
    {
      "id": 124,
      "name": "失信被执行核查【董监高】",
      "scene": "102",
      "price": 0.18,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/dishonest_execute_person/",
      "description": "通过输入企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）以及失信被执行人姓名/名称，查询目标企业该人员的失信被执行相关数据。",
      "fields": [
        "案号",
        "失信被执行人行为具体情形",
        "执行标的",
        "执行法院",
        "履行情况",
        "立案时间"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_124",
      "internal": false
    },
    {
      "id": 125,
      "name": "历史投资任职信息【董监高】",
      "scene": "101",
      "price": 0.5,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/officer_history_search/",
      "description": "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取该人员在其他企业中担任的各种角色的具体情况，包括但不限于被投方企业名称、变更类型及日期、投资方个人/企业名称、变动前后的认缴金额和投资占比等详细信以及该人员作为历史股东的完整记录，包括其在不同企业的任职情况，如任职企业名称、职位中文、入职和离职日期等。",
      "fields": [
        "被投方企业名称",
        "变动后投资占比",
        "变动后认缴金额",
        "任职企业名称",
        "职位中文",
        "入职日期"
      ],
      "serverId": "equity-relations",
      "toolName": "relation.api_125",
      "internal": false
    },
    {
      "id": 126,
      "name": "新注册企业",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_info_push/",
      "description": "根据成立日期查询新注册企业信息，包括企业名称、统一社会信用代码、法人姓名、注 册资本、成立日期和注册地址等详细信息。",
      "fields": [],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_126",
      "internal": false
    },
    {
      "id": 127,
      "name": "新注册个体",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/geti_info_push/",
      "description": "根据成立日期查询新注册个体信息，包括企业名称、统一社会信用代码、法人姓名、注 册资本、成立日期和注册地址等详细信息。",
      "fields": [],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_127",
      "internal": false
    },
    {
      "id": 129,
      "name": "企业信息深度查询",
      "scene": "101",
      "price": 2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/company_info_deep_search/",
      "description": "可根据企业相关参数进行查询，获取企业多维度详细信息，包括但不限于企业名称、统 一社会信用代码、法定代表人、成立日期、注册资本、经营状态、邮箱、地址、经营范围、 联系电话、注销日期、法人类型、经营场所、纳税人类型、参保人数、企业官网、纳税信用 评级、是否上市、企业基本信息、主要管理人员及其职位、分支机构信息、变更事项及内容 等",
      "fields": [
        "企业基本信息",
        "法定代表人其他公司任职",
        "年度年报",
        "企业对外投资信息",
        "严重违法",
        "行政处罚"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_129",
      "internal": false
    },
    {
      "id": 130,
      "name": "土地信息",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_land_info/",
      "description": "查询企业持有的土地信息，包括电子监管号、项目名称、位置、面积、用途、使用年限等。",
      "fields": [
        "电子监管号",
        "项目名称",
        "项目位置",
        "面积",
        "土地用途",
        "土地使用年限"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_130",
      "internal": false
    },
    {
      "id": 131,
      "name": "行政处罚（大数据）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_bigdata_punish/",
      "description": "整合了来自多个来源（信用中国，地方工商局，各个部委）的行政处罚详情，如处罚决定日期、处罚种类、行政部门、事由、依据、结果、金额及处罚执行情况等。",
      "fields": [
        "决定书文号",
        "处罚决定日期",
        "处罚行政部门",
        "处罚事由",
        "处罚结果",
        "处罚金额"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_131",
      "internal": false
    },
    {
      "id": 132,
      "name": "案件流程",
      "scene": "102",
      "price": 0.5,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_case_flow/",
      "description": "追踪案件从立案到归档的整个流程，包括但不限于立案日期、当事人、主要法官、内容、 流程状态等。",
      "fields": [
        "案号",
        "立案日期",
        "当事人",
        "法院名称",
        "内容",
        "流程状态"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.case_process",
      "internal": false
    },
    {
      "id": 133,
      "name": "行政许可（大数据）",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_admin_licenese_bd/",
      "description": "提供企业获得的行政许可信息，特别侧重于通过各个部委收集和分析得到的许可详情，返回数据包括许可文件ID、编号及名称，有效期的起止日期，以及颁发许可的机关和许可状态等关键信息。",
      "fields": [
        "许可文件编号",
        "许可文件名称",
        "有效期开始日期",
        "有效期结束日期",
        "许可机关",
        "许可文件状态"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_133",
      "internal": false
    },
    {
      "id": 134,
      "name": "运营商核验",
      "scene": "108",
      "price": 0.5,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/verify_operator/",
      "description": "通过输入人名、人员身份标识及手机号，验证手机号与身份信息的一致性等。",
      "fields": [
        "校验状态码",
        "校验状态码说明"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_134",
      "internal": false
    },
    {
      "id": 135,
      "name": "行政处罚（税务局）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_tax_admin_penalty/",
      "description": "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取税务局对企业实施的行政处罚记录，涵盖案件性质、主要违法事实、处罚结果及决定书文号等信息。",
      "fields": [
        "主要违法事实",
        "处罚结果",
        "决定书文号",
        "决定机关",
        "决定日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_135",
      "internal": false
    },
    {
      "id": 136,
      "name": "失信行政处罚（海关）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_customs_dishonest_penalty/",
      "description": "可根据企业相关参数进行查询，获取海关对企业实施的失信处罚信息，涵盖案件名称、处罚内容、日期及企业管理类别等。",
      "fields": [
        "编号",
        "处罚内容",
        "处罚日期",
        "企业管理类别",
        "海关编码"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_136",
      "internal": false
    },
    {
      "id": 137,
      "name": "行政处罚（食药监）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_food_drug_penalty/",
      "description": "提供食品药品监督管理部门对企业实施的行政处罚记录，包括违法行为类型、处罚种类、依据及结果等。",
      "fields": [
        "行政处罚决定书文号",
        "主要违法事实",
        "行政处罚种类和依据",
        "行政处罚的履行方式和期限"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_137",
      "internal": false
    },
    {
      "id": 138,
      "name": "行政处罚（银监会）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_cbrc_penalty/",
      "description": "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取银监会对金融机构实施的行政处罚详情，涵盖违法违规事实、处罚依据及决定等。",
      "fields": [
        "处罚文号",
        "主要违法违规事实",
        "行政处罚决定",
        "作出处罚决定的机关名称",
        "作出处罚决定的日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_138",
      "internal": false
    },
    {
      "id": 139,
      "name": "行政处罚（保监会）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_circ_penalty/",
      "description": "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，提供保监会对保险机构实施的行政处罚信息，包括当事人、处罚内容、日期及决定机关等。",
      "fields": [
        "当事企业",
        "当事人",
        "文号",
        "日期",
        "内容"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_139",
      "internal": false
    },
    {
      "id": 140,
      "name": "行政处罚（证监会）",
      "scene": "107",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_csrc_penalty/",
      "description": "可根据企业相关参数（企业唯一标识、企业名称、统一社会信用代码或注册号）进行查询，获取证监会对证券市场参与者实施的行政处罚记录，涵盖主要违法事实、处罚依据及决定机关等。",
      "fields": [
        "当事企业",
        "当事人",
        "文号",
        "发文日期",
        "发布机构",
        "内容"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_140",
      "internal": false
    },
    {
      "id": 141,
      "name": "中国香港企业信息",
      "scene": "112",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/hk_enterprise_search/",
      "description": "允许用户通过企业名称、注册日期和主体状态为入参，快速获取中国香港企业的详细信息，此接口提供的数据包括但不限于主体名称、企业编号、注册日期、主体类型、主体状态、注销日期、联系方式、官网地址及主要人员等。",
      "fields": [
        "主体名称",
        "企业编号",
        "注册日期",
        "主体类型",
        "主体状态",
        "联系方式"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_141",
      "internal": false
    },
    {
      "id": 144,
      "name": "食品生产许可（SC）",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_food_productsc_permission/",
      "description": "提供企业的食品生产许可（SC）信息，揭示企业在食品生产领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等。",
      "fields": [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_144",
      "internal": false
    },
    {
      "id": 145,
      "name": "食品生产许可（QS）",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_food_productqs_permission/",
      "description": "提供企业的食品生产许可（QS）信息，揭示企业在食品生产领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等详细信息。",
      "fields": [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_145",
      "internal": false
    },
    {
      "id": 146,
      "name": "食品经营许可",
      "scene": "108",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_food_manage_permission/",
      "description": "提供企业的食品经营许可信息，揭示企业在食品经营领域的合法资质，如许可资质名称、许可证编号、发证机关及有效期等。",
      "fields": [
        "许可资质名称",
        "许可证编号",
        "发证机关",
        "有效期开始日期",
        "有效期结束日期"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_146",
      "internal": false
    },
    {
      "id": 147,
      "name": "行政处罚（人民银行）",
      "scene": "107",
      "price": 0.2,
      "method": "post",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/enterprise_pboc_penalty/",
      "description": "可根据企业相关参数进行查询，获取中国人民银行对企业实施的行政处罚信息，包括违法行为类型、处罚内容及决定机关等。",
      "fields": [
        "决定书文号",
        "违法行为类型",
        "行政处罚内容",
        "决定机关名称",
        "决定日期"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.api_147",
      "internal": false
    },
    {
      "id": 151,
      "name": "新闻",
      "scene": "100",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapihd/getNewsListByName",
      "description": "磊",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "business.api_151",
      "internal": true
    },
    {
      "id": 153,
      "name": "11",
      "scene": "109",
      "price": 11,
      "method": "11",
      "url": "https://gateway.qyxqk.com/wdyl/openapi/company_case_check_query/",
      "description": "11",
      "fields": [
        "11"
      ],
      "serverId": "ip-operations",
      "toolName": "business.api_153",
      "internal": true
    },
    {
      "id": 157,
      "name": "投资事件",
      "scene": "106",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/investment_financing_event/",
      "description": "支持通过投资机构名称获取投资事件信息，企业投资事件信息包括投资事件轮次、金额、投资方、融资企业、行业等字段的详细信息。",
      "fields": [
        "投资机构",
        "投资日期",
        "融资企业名称",
        "行业名称",
        "投资轮次名称"
      ],
      "serverId": "ip-operations",
      "toolName": "business.investment_event",
      "internal": false
    },
    {
      "id": 158,
      "name": "律所基本信息",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/law_firm_info_query/",
      "description": "支持通过律所ID、律所完整名称、统一社会信用代码，查询律师事务所的详细信息，包括统一社会信用代码、设立资产、主管机关名称、邮政编码、组织类型等核心字段。",
      "fields": [
        "律所id",
        "律所完整名称",
        "统一社会信用代码"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_158",
      "internal": false
    },
    {
      "id": 159,
      "name": "企业规模",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/enterprise_scale/",
      "description": "根据企业ID、企业完整名称、工商注册号、统一社会信用代码查询企业规模",
      "fields": [],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_159",
      "internal": false
    },
    {
      "id": 160,
      "name": "分支机构所属总公司",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/parent_company_query/",
      "description": "根据企业ID、企业完整名称、工商注册号、统一社会信用代码获取所归属的总公司详细信息",
      "fields": [
        "企业id",
        "企业完整名称",
        "统一社会信用代码",
        "注册号"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_160",
      "internal": false
    },
    {
      "id": 161,
      "name": "法院公告详情",
      "scene": "102",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/courtBulletinDetail/",
      "description": "根据法院公告ID查询企业的法院公告信息，包括案号、原告、被告、案由名称、公告正文等字段的详细信息",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.court_announcement_detail",
      "internal": false
    },
    {
      "id": 162,
      "name": "法院公告列表",
      "scene": "102",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/courtBulletinList/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业的法院公告信息，包括案号、原 告、被告、案由名称、公告类型等字段的详细信息",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.court_announcement_list",
      "internal": false
    },
    {
      "id": 163,
      "name": "股权变更（工商公示）",
      "scene": "101",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/equityChange/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业的股权变更信息，包括变更前后 的股份占比、认缴金额、变更日期等字段的详细信息。",
      "fields": [],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_163",
      "internal": false
    },
    {
      "id": 166,
      "name": "空壳扫描",
      "scene": "114",
      "price": 0.02,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/shell_query/",
      "description": "聚焦套牌、僵尸、皮包等非正常经营企业识别，依托市场经营、财务信息等 多维度数据实施综合扫描。（声明：本评估结果由公开大数据分析测算形成。鉴 于数据获取存在客观局限，相关结果仅供参考，不作为商业决策依据。五度易链 对数据真实性、准确性、全面性、时效性不承担责任，不负责使用者据此产生的 任何商业风险，且保留调整相关观点与表述的权利。）",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "business.api_166",
      "internal": false
    },
    {
      "id": 167,
      "name": "企业工商信息",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/enterprise_business_info/",
      "description": "支持通过企业ID、企业/个体工商户/组织机构完整名称或统一社会信用代码，查询其详细信息，包括统一社会信用代码、注册资本、经营范围、成立日期、经营状态等核心字段，覆盖企业、个体工商户、组织机构三类主体",
      "fields": [
        "企业id",
        "企业完整名称",
        "社会统一信用代码"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_167",
      "internal": false
    },
    {
      "id": 168,
      "name": "十大受益人",
      "scene": "101",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/beneficiary_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业受益所有人信息，包括受益人名 称、最终持股比例、持股链条等字段的详细信息。",
      "fields": [],
      "serverId": "equity-relations",
      "toolName": "relation.top_beneficiaries",
      "internal": false
    },
    {
      "id": 169,
      "name": "纳税人类型",
      "scene": "109",
      "price": 0.01,
      "method": "POST",
      "url": " http://ceshi.qyxqk.com:9202/wdyl/openapi/taxpayer_type/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询纳税人相关信息，包括纳税人名称、纳税人识别号、纳税人资格类型、主管税务机关、有效期起、有效期止等字段的信息，纳税人类型包括一般纳税人、小规模纳税人等。",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "business.taxpayer_type",
      "internal": false
    },
    {
      "id": 170,
      "name": "实际控制人",
      "scene": "109",
      "price": 0.2,
      "method": "POST",
      "url": " http://ceshi.qyxqk.com:9202/wdyl/openapi/actual_controller/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业实际控制人信息，包括企业ID 、企业名称、实控人名称、股权比例等字段的详细信息。",
      "fields": [],
      "serverId": "equity-relations",
      "toolName": "relation.actual_controller",
      "internal": false
    },
    {
      "id": 171,
      "name": "企业招投标详情查询doris测试",
      "scene": "108",
      "price": 0.1,
      "method": "POST",
      "url": " http://ceshi.qyxqk.com:9202/wdyl/openapi/company_bid_detail_query2/",
      "description": "企业招投标详情查询",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "business.api_171",
      "internal": true
    },
    {
      "id": 172,
      "name": "企业模糊搜索（简化版）",
      "scene": "110",
      "price": 0.01,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/fuzzy_query_v2/",
      "description": "通过搜索关键字（企业名称、注册地址、经营范围、统一社会信用代码、注册号）获取匹配搜索条件的企业，返回企业名称、曾用名、注册资金、成立日期、经营状态等字段信息。",
      "fields": [
        "企业名称",
        "企业id",
        "曾用名",
        "注册资本"
      ],
      "serverId": "enterprise-diligence",
      "toolName": "company.api_172",
      "internal": false
    },
    {
      "id": 174,
      "name": "合作风险排查",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": " http://ceshi.qyxqk.com:9202/wdyl/openapi/cooperation_risk_assessment/",
      "description": "合作风险排查",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.cooperation_assessment",
      "internal": false
    },
    {
      "id": 179,
      "name": "最终受益人",
      "scene": "109",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/ultimate_beneficiary_query/",
      "description": "根据企业id/企业完整名称/社会统一信用代码查询企业最终受益人信息，包括受益人名称、最终持股比例、持股链条等字段的详细信息。",
      "fields": [],
      "serverId": "equity-relations",
      "toolName": "relation.ultimate_beneficiary",
      "internal": false
    },
    {
      "id": 180,
      "name": "主要人员对外投资任职",
      "scene": "101",
      "price": 0.1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/key_personnel_overseas_investment/",
      "description": "根据企业ID、企业名称、统一社会信用代码，结合指定人员姓名（法人/股东/高管）， 查询该人员当前担任法定代表人、对外投资、在外任职的企业信息",
      "fields": [],
      "serverId": "equity-relations",
      "toolName": "relation.key_personnel_external_roles",
      "internal": false
    },
    {
      "id": 181,
      "name": "工程资质资格",
      "scene": "114",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_qualification_query/",
      "description": "通过企业ID、企业全称或统一社会信用代码查询企业工程资质资格信息，包括资质名 称、资质证书号、发证机关等。",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "business.engineering_qualification",
      "internal": false
    },
    {
      "id": 182,
      "name": "股权穿透",
      "scene": "101",
      "price": 0.2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/equity_through/",
      "description": "支持通过企业ID、企业全称或统一社会信用代码，向上递归穿透查询最多十层股东链。输出内容涵盖各层级公司名称、股东出资比例、完整股权路径及层级标识，且不限持股比例，全面还原企业多层次股权投资关系，高效辅助股权结构分析与风险排查。",
      "fields": [],
      "serverId": "equity-relations",
      "toolName": "relation.equity_lookthrough",
      "internal": false
    },
    {
      "id": 183,
      "name": "专利模糊查询",
      "scene": "100",
      "price": 1,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_patent_fuzzy/",
      "description": "专利模糊查询",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "ip.patent_fuzzy_search",
      "internal": true
    },
    {
      "id": 184,
      "name": "专利高级筛选查询",
      "scene": "100",
      "price": 2,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/company_patent_senior/",
      "description": "专利高级筛选",
      "fields": [],
      "serverId": "ip-operations",
      "toolName": "ip.patent_advanced_search",
      "internal": true
    },
    {
      "id": 185,
      "name": "董监高失信被执行",
      "scene": "102",
      "price": 0,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/dishonest_execute_person",
      "description": "董监高失信被执行",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.executive_dishonest_execute",
      "internal": false
    },
    {
      "id": 186,
      "name": "董监高被执行",
      "scene": "102",
      "price": 0,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi/execute_person",
      "description": "董监高被执行",
      "fields": [],
      "serverId": "risk-compliance",
      "toolName": "risk.executive_execute",
      "internal": false
    },
    {
      "id": 202,
      "name": "被执行人",
      "scene": "102",
      "price": 0.15,
      "method": "POST",
      "url": "http://ceshi.qyxqk.com:9202/wdyl/openapi-tx/company_court_execute_query/",
      "description": "根据企业id/ 企业完整名称/社会统一信用代码  查询企业被执行人（人员）",
      "fields": [
        "案号",
        "执行法院",
        "立案时间",
        "执行标的",
        "被执行人姓名/名称"
      ],
      "serverId": "risk-compliance",
      "toolName": "risk.execute_person_v2",
      "internal": false
    }
  ]
};

if (typeof window !== 'undefined') window.mcpCatalogData = mcpCatalogData;
if (typeof module !== 'undefined' && module.exports) module.exports = mcpCatalogData;
