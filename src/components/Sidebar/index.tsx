import React from 'react'
import "../../styles/Sidebar.scss";
import SingleIcon from './SingleIcon';
import {ReactComponent as DownArrow} from "../../assets/arrowDown.svg"

import { ReactComponent as Briefcase } from "../../assets/icons/briefcase.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userfriends.svg";
import { ReactComponent as GuarantorIcon } from "../../assets/icons/users.svg";
import { ReactComponent as LoanIcon } from "../../assets/icons/loan.svg";
import { ReactComponent as HandshakeIcon } from "../../assets/icons/handshake.svg";
import { ReactComponent as PiggyIcon } from "../../assets/icons/piggybank.svg";
import { ReactComponent as LoanReqIcon } from "../../assets/icons/loanreq.svg";
import { ReactComponent as WhiteListIcon } from "../../assets/icons/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../../assets/icons/karma.svg";
import { ReactComponent as BankIcon } from "../../assets/icons/bank.svg";
import { ReactComponent as FeesIcon } from "../../assets/icons/feescharges.svg";
import { ReactComponent as TransactionIcon } from "../../assets/icons/transactions.svg";
import { ReactComponent as ServiceIcon } from "../../assets/icons/services.svg";
import { ReactComponent as ServiceAcctIcon } from "../../assets/icons/serviceaccount.svg";
import { ReactComponent as SettlementsIcon } from "../../assets/icons/settlements.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/chartbar.svg";
import { ReactComponent as PreferenceIcon } from "../../assets/icons/preference.svg";
import { ReactComponent as FeepricingIcon } from "../../assets/icons/feepricing.svg";
import { ReactComponent as AuditIcon } from "../../assets/icons/audit.svg";

const index = () => {
  return (
    <aside className="sidebar">
      <SingleIcon text="switch organization"  icon={<Briefcase/>} arrow={<DownArrow/>}/>
      <SingleIcon text="dashboard "  icon={<HomeIcon/>} />
      <div className="sidebar_customers">
        <h3 className="title">customers</h3>
      <SingleIcon text="users "  icon={<UserIcon/>} />
      <SingleIcon text="guarantors "  icon={<GuarantorIcon/>} />
      <SingleIcon text="loans "  icon={<LoanIcon/>} />
      <SingleIcon text="decision models"  icon={<HandshakeIcon/>} />
      <SingleIcon text="savings"  icon={<PiggyIcon/>} />
      <SingleIcon text="loan request"  icon={<LoanReqIcon/>} />
      <SingleIcon text="whitelist"  icon={<WhiteListIcon/>} />
      <SingleIcon text="karma"  icon={<KarmaIcon/>} />
      </div>
      <div className="sidebar_businesses">
      <h3 className="title">businesses</h3>
      <SingleIcon text="organization"  icon={<Briefcase/>} />
      <SingleIcon text="loan products"  icon={<LoanReqIcon/>} />
      <SingleIcon text="savings products"  icon={<BankIcon/>} />
      <SingleIcon text="fees and charges"  icon={<FeesIcon/>} />
      <SingleIcon text="transactions"  icon={<TransactionIcon/>} />
      <SingleIcon text="services"  icon={<ServiceIcon/>} />
      <SingleIcon text="service account"  icon={<ServiceAcctIcon/>} />
      <SingleIcon text="settlement"  icon={<SettlementsIcon/>} />
      <SingleIcon text="report"  icon={<ReportIcon/>} />
      </div>
      <div className="sidebar_settings">
      <h3 className="title">settings</h3>
      <SingleIcon text="preferences"  icon={<PreferenceIcon/>} />
      <SingleIcon text="fees and pricing"  icon={<FeepricingIcon/>} />
      <SingleIcon text="audit logs"  icon={<AuditIcon/>} />

      </div>
    </aside>
  )
}

export default index
