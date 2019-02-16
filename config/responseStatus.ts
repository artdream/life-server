export enum HttpStatus {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}

export interface IRespMessage {
    httpStatus: HttpStatus;
    code: number;
    message: string;
}

export class RespStatus {
    public static SUCCESS: IRespMessage = { httpStatus: HttpStatus.OK, code: 2000001, message: '请求成功.' };
    public static SIGNUP_SUCCESS: IRespMessage = { httpStatus: HttpStatus.CREATED, code: 2000001, message: '账号注册成功.' };

    public static REQ_PARAM_ERR: IRespMessage = {
        httpStatus: HttpStatus.BAD_REQUEST,
        code: 4000001,
        message: '请求参数错误.'
    };
    public static ACCOUNT_PWD_UNMATCH: IRespMessage = {
        httpStatus: HttpStatus.BAD_REQUEST,
        code: 4000002,
        message: '您的密码错误, 请重新输入.'
    };
    public static NAME_SENSITIVE_WORD: IRespMessage = {
        httpStatus: HttpStatus.BAD_REQUEST,
        code: 4000003,
        message: '您的名称存在敏感词汇，请换个名称重新提交.'
    };
    public static CAPTCHA_CODE_ERR: IRespMessage = {
        httpStatus: HttpStatus.BAD_REQUEST,
        code: 4000004,
        message: '输入验证码有误.'
    };

    public static TOKEN_AUTH_FAIL: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010001,
        message: '身份认证未通过.'
    };
    public static NAME_PASSWD_ERR: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010002,
        message: '登录用户名或密码有误.'
    };
    public static AUTH_CODE_FAIL: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010003,
        message: '验证码输入有误.'
    };
    public static TOKEN_LOGGED_AGAIN: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010004,
        message: '当前账号已在其他地方登录.'
    };
    public static LOGIN_STATUS_INVALID: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010005,
        message: '登陆状态已失效.'
    };
    public static STATUS_DISABLE: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010006,
        message: '账户被封停，请联系管理员开通.'
    };
    public static NOT_OPEN: IRespMessage = {
        httpStatus: HttpStatus.UNAUTHORIZED,
        code: 4010007,
        message: '尚未开放.'
    };

    public static ACCOUNT_NOT_FOUND: IRespMessage = {
        httpStatus: HttpStatus.NOT_FOUND,
        code: 4040001,
        message: '用户信息未找到.'
    };
    public static AUTHMODE_NOT_FOUND: IRespMessage = {
        httpStatus: HttpStatus.NOT_FOUND,
        code: 4040002,
        message: '未知的验证方式.'
    };
    public static DATA_NOT_FOUND: IRespMessage = {
        httpStatus: HttpStatus.NOT_FOUND,
        code: 4040003,
        message: '查询数据不存在.'
    };
    public static EMAIL_NOT_SIGNUP: IRespMessage = {
        httpStatus: HttpStatus.NOT_FOUND,
        code: 4040004,
        message: '该邮箱尚未注册，请输入正确的注册邮箱.'
    };

    public static SERV_INSIDE_ERR: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000001,
        message: '服务端内部错误.'
    };
    public static SERV_FEEDBACK_ERR: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000002,
        message: '反馈消息错误.'
    };
    public static FUNC_NOT_SUPPORT: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000003,
        message: '该功能暂时不支持.'
    };
    public static UPDNAME_DATE_LIMIT: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000004,
        message: '7天内只能修改一次昵称哦~'
    };
    public static SERV_FEEDBACK_MAX_ERR: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000005,
        message: '连续留言一次最多10条哦，请等待客服回复或24小时后方可继续留言'
    };
    public static EXCEPTION_USER_BET: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000006,
        message: '竞猜数据异常暂无法下注，请刷新当前页面'
    };
    public static MAX_MULTIPLE_OVER_LIMIT: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000007,
        message: '您当前下注已超出最大押注倍数.'
    };
    public static POINTS_NOT_ENOUGH: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000008,
        message: '您金豆余额不足.'
    };
    public static PRIZE_UNSALE: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000009,
        message: '商品已下架.'
    };
    public static PRIZE_SALE_OUT: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000010,
        message: '商品已售完.'
    };
    public static BET_TIME_OVER_LIMIT: IRespMessage = {
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        code: 5000011,
        message: '您的投注已超出允许的赛事下注时间，请选择其他赛事投注.'
    };

    public static SIGNUP_NAME_REPEAT: IRespMessage = {
        httpStatus: HttpStatus.CONFLICT,
        code: 4090001,
        message: '该账号已被注册.'
    };
    public static UPDATE_NAME_REPEAT: IRespMessage = {
        httpStatus: HttpStatus.CONFLICT,
        code: 4090002,
        message: '该昵称已被使用.'
    };
}