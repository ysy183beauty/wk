package com.jeecms.core.entity;


import com.jeecms.core.entity.base.BaseUnifiedUser;

public class UnifiedUser extends BaseUnifiedUser {
	private static final long serialVersionUID = 1L;

	/* [CONSTRUCTOR MARKER BEGIN] */
	public UnifiedUser () {
		super();
	}

	/**
	 * Constructor for primary key
	 */
	public UnifiedUser (java.lang.Integer id) {
		super(id);
	}

	/**
	 * Constructor for required fields
	 
	public UnifiedUser (
		java.lang.Integer id,
		java.lang.String username,
		java.lang.String password,
		java.util.Date registerTime,
		java.lang.String registerIp,
		java.lang.Integer loginCount,
		java.lang.Integer errorCount,
		java.lang.Boolean activation,
		java.lang.String rdpUserId,	//zhyg
		java.lang.String rdpPhoneNumber,	//zhyg
		java.lang.String rdpUserOrg,	//zhyg
		java.lang.String rdpUserOrgId,	//zhyg
		
		java.lang.String rdpRole,	 
		java.lang.String rdploginName
		
		) {

		super (
			id,
			username,
			password,
			registerTime,
			registerIp,
			loginCount,
			errorCount,
			activation,
			rdpUserId,
			rdpPhoneNumber,
			rdpUserOrg,
			rdpUserOrgId,
			rdpRole,	 
			rdploginName
		   );
	}
   */
	/* [CONSTRUCTOR MARKER END] */
	
	public void init(){
		if(getLoginCount()==null){
			setLoginCount(0);
		}
		if(getErrorCount()==null){
			setErrorCount(0);
		}
	}

}