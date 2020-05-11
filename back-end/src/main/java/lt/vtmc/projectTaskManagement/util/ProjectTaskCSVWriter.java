package lt.vtmc.projectTaskManagement.util;

import java.io.PrintWriter;
import java.util.List;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvException;

public class ProjectTaskCSVWriter<T> {
	
	public void writeProjectOrTaskToCSV(PrintWriter writer, List<T> tasks) throws CsvException {
		 StatefulBeanToCsv<T> taskCSV = new StatefulBeanToCsvBuilder<T>(writer)
	                .withQuotechar(CSVWriter.DEFAULT_QUOTE_CHARACTER)
	                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
	                .withOrderedResults(false)
	                .build();
		 
		 taskCSV.write(tasks);
	}

}
