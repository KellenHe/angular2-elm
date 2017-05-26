import { Base } from '../base';

export class Shopping extends Base {
    activities: Activities[];
    address: string;
    authentic_id: number;
    average_cost: string;
    delivery_mode: DeliveryMode;
    description: string;
    distance: number;
    float_delivery_fee: number;
    float_minimum_order_amount: number;
    id: number;
    image_path: string;
    is_new: boolean;
    is_premium: boolean;
    is_stock_empty: number;
    latitude: number;
    longitude: number;
    max_applied_quantity_per_order: number;
    name: string;
    next_business_time: string;
    only_use_poi: boolean;
    opening_hours: string[];
    order_lead_time: number;
    phone: string;
    piecewise_agent_fee: PiecewiseAgentFee;
    promotion_info: string;
    rating: number;
    rating_count: number;
    recent_order_num: number;
    recommend: Recommend;
    regular_customer_count: number;
    status: number;
    supports: Supports[];
    type: number;
};

class Activities {
    attribute: string;
    description: string;
    icon_color: string;
    icon_name: string;
    id: number;
    is_exclusive_with_food_activity: boolean;
    name: string;
    tips: string;
    type: number;
};

class DeliveryMode {
    color: string;
    id: number;
    is_solid: boolean;
    text: string;
};

class PiecewiseAgentFee {
    description: string;
    extra_fee: number;
    is_extra: boolean;
    rules: Rules;
    tips: string;
};

class Rules {
    fee: number;
    price: number;
};

class Recommend {
    image_hash: string;
    track: string;
}

class Supports {
    description: string;
    icon_color: string;
    icon_name: string;
    id: number;
    name: string;
};
