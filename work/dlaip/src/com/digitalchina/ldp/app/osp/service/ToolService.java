package com.digitalchina.ldp.app.osp.service;

import com.digitalchina.ldp.app.osp.bean.ToolBean;
import com.digitalchina.ldp.bean.PageList;

import java.util.List;

public interface ToolService {
	
	public List<ToolBean> getToolsByKeyWord(String toolName);

	public Boolean updateDownloadTime(String toolName);
	
	public PageList<ToolBean> listToolsByDownCount(int start,int size);
}